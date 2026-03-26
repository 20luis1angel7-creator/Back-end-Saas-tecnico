import { Request, Response } from "express";
import { orderRepository } from "../../infrastructure/container.js";
import { CompleteOrderUseCase } from "../../application/use-cases/order/CompleteOrderUseCase.js";
import { StartOrderUseCase } from "../../application/use-cases/order/StartOrderUseCase.js";
import { CancelOrderUseCase } from "../../application/use-cases/order/CancelOrderUseCase.js";
import { materialRepository } from "../../infrastructure/container.js";
import { orderMaterialUsageRepository } from "../../infrastructure/container.js";
import { NotFoundError, BusinessRuleError } from "../../domain/errors/DomainErrors.js";
import { ListOrdersUseCase } from "../../application/use-cases/order/ListOrdersUseCase.js";
import { toOrderDTO } from "../../domain/entities/Order.js";
import { RegisterMaterialUsageUseCase } from "../../application/use-cases/order/RegisterMaterialUsageUseCase.js";
import { clientRepository } from "../../infrastructure/container.js";
import { CreateOrderUseCase } from "../../application/use-cases/order/CreateOrderUseCase.js";

export class OrderController {

    async create(req: Request, res: Response) {
        try {
            const usecase = new CreateOrderUseCase(
                clientRepository,
                orderRepository
            );

            const order = await usecase.execute({
                cedula: req.body.cedula
            });

            const client = await clientRepository.findById(order.clientId);

            return res.status(201).json({
                ...toOrderDTO(order),
                client: client
                    ? {
                          cedula: client.cedula,
                          name: client.name,
                          address: client.address
                      }
                    : null
            });
        } catch (error: unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({
                    type: "NOT_FOUND",
                    message: error.message
                });
            }

            if (error instanceof BusinessRuleError) {
                return res.status(400).json({
                    type: "BUSINESS_RULE_VIOLATION",
                    message: error.message
                });
            }

            return res.status(500).json({
                type: "INTERNAL_ERROR",
                message: "Internal server error"
            });
        }
    }
    async getById( req: Request<{ id: string}>, res: Response) {
        try {
            const order = await orderRepository.findById(req.params.id);

            if (!order) {
                return res.status(404).json({ type: "NOT_FOUND", message: "Order not found" })
            }

            const usages = await orderMaterialUsageRepository.findByOrderId(req.params.id)

            const materialsUsed = []

            for (const usage of usages) {
                const material = await materialRepository.findById(usage.materialId)

                materialsUsed.push({
                    materialId: usage.materialId,
                    materialName: material ? material.name : "Unknown material",
                    quantity: usage.quantity
                })
            }

            const client = await clientRepository.findById(order.clientId)

            return res.status(200).json({
                ...toOrderDTO(order),
                client: client
                    ? {
                        cedula: client.cedula,
                        name: client.name,
                        address: client.address
                    }
                    : null,
                materialsUsed
            })
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async start(req: Request<{id: string}>, res: Response) {

        try {
            const usecase = new StartOrderUseCase(orderRepository);
            const order = await usecase.execute(req.params.id);

            return res.status(200).json(order);
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }
    
    async complete(req: Request<{id: string}>, res: Response) {
        
        try {
            const usecase = new CompleteOrderUseCase(
                orderRepository,
                materialRepository,
                orderMaterialUsageRepository
            );
            const order = await usecase.execute(req.params.id);

            return res.status(200).json(order);
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async cancel(req: Request<{id: string}>, res: Response) {
        try {
            const usecase = new CancelOrderUseCase(orderRepository);
            const result = await usecase.execute(req.params.id)

            return res.status(200).json(result);
            
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async list(req: Request, res: Response) {
    try {
        const usecase = new ListOrdersUseCase(orderRepository)
        const result = await usecase.execute()

        const ordersWithClient = []

        for (const order of result) {
            const client = await clientRepository.findById(order.clientId)

            ordersWithClient.push({
                ...toOrderDTO(order),
                client: client
                    ? {
                        cedula: client.cedula,
                        name: client.name,
                        address: client.address
                    }
                    : null
            })
        }

        return res.status(200).json(ordersWithClient)
    } catch (error: unknown) {
        if (error instanceof NotFoundError) {
            return res.status(404).json({ type: "NOT_FOUND", message: error.message })
        }

        if (error instanceof BusinessRuleError) {
            return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
        }

        return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" })
    }
}

    async registerMaterialUsage(req: Request<{ id: string }>, res: Response) {
    try {
        const usecase = new RegisterMaterialUsageUseCase(
            orderRepository,
            orderMaterialUsageRepository,
            materialRepository
        )

        await usecase.execute(
            req.params.id,
            req.body.materialId,
            Number(req.body.quantity)
        )

        return res.status(201).json({ message: "Material usage registered" })
    } catch (error: unknown) {
        if (error instanceof NotFoundError) {
            return res.status(404).json({ type: "NOT_FOUND", message: error.message })
        }

        if (error instanceof BusinessRuleError) {
            return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
        }

        return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" })
    }
}
}


