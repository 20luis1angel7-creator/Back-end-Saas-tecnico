import { orderRepository } from "../../infrastructure/container.js";
import { CompleteOrderUseCase } from "../../application/use-cases/order/CompleteOrderUseCase.js";
import { StartOrderUseCase } from "../../application/use-cases/order/StartOrderUseCase.js";
import { CancelOrderUseCase } from "../../application/use-cases/order/CancelOrderUseCase.js";
import { materialRepository } from "../../infrastructure/container.js";
import { orderMaterialUsageRepository } from "../../infrastructure/container.js";
import { NotFoundError, BusinessRuleError } from "../../domain/errors/DomainErrors.js";
import { ListOrdersUseCase } from "../../application/use-cases/order/ListOrdersUseCase.js";
export class OrderController {
    async getById(req, res) {
        try {
            const orders = await orderRepository.findById(req.params.id);
            return res.status(200).json(orders);
        }
        catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message });
            }
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }
            return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" });
        }
    }
    async start(req, res) {
        try {
            const usecase = new StartOrderUseCase(orderRepository);
            const order = await usecase.execute(req.params.id);
            return res.status(200).json(order);
        }
        catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message });
            }
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }
            return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" });
        }
    }
    async complete(req, res) {
        try {
            const usecase = new CompleteOrderUseCase(orderRepository, materialRepository, orderMaterialUsageRepository);
            const order = await usecase.execute(req.params.id);
            return res.status(200).json(order);
        }
        catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message });
            }
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }
            return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" });
        }
    }
    async cancel(req, res) {
        try {
            const usecase = new CancelOrderUseCase(orderRepository);
            const result = await usecase.execute(req.params.id);
            return res.status(200).json(result);
        }
        catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message });
            }
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }
            return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" });
        }
    }
    async list(req, res) {
        const usecase = new ListOrdersUseCase(orderRepository);
        const result = await usecase.execute();
        return res.status(200).json(result);
    }
}
//# sourceMappingURL=OrderController.js.map