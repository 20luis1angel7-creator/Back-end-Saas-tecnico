import { Request, Response } from "express";
import { orderRepository } from "../../infrastructure/container.js";
import { CompleteOrderUseCase } from "../../application/use-cases/order/CompleteOrderUseCase.js";
import { StartOrderUseCase } from "../../application/use-cases/order/StartOrderUseCase.js";
import { CancelOrderUseCase } from "../../application/use-cases/order/CancelOrderUseCase.js";
import { materialRepository } from "../../infrastructure/container.js";
import { orderMaterialUsageRepository } from "../../infrastructure/container.js";
import { NotFoundError, BusinessRuleError } from "../../domain/errors/DomainErrors.js";

export class OrderController {
    async getClientById( req: Request<{ clientId: string}>, res: Response) {
        try {
            const orders = await orderRepository.findByClientId(req.params.clientId);
            
            return res.status(200).json(orders);
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
    
}


