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

export class OrderController {
    async getById( req: Request<{ id: string}>, res: Response) {
        try {
            const order = await orderRepository.findById(req.params.id);

            if (!order) {
                return res.status(404).json({ type: "NOT_FOUND", message: "Order not found" })
            }

            return res.status(200).json(toOrderDTO(order));
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
        const usecase = new ListOrdersUseCase(orderRepository)
        const result = await usecase.execute()

        return res.status(200).json(result.map(toOrderDTO))
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


