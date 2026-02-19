import { orderRepository } from "../../constainer.js";
import { CompleteOrderUseCase } from "../../../application/use-cases/order/CompleteOrderUseCase.js";
import { StartOrderUseCase } from "../../../application/use-cases/order/StartOrderUseCase.js";
import { CancelOrderUseCase } from "../../../application/use-cases/order/CancelOrderUseCase.js";
import { DomainError } from "../../../domain/errors/DomainErrors.js";
export class OrderController {
    async getClientById(req, res) {
        try {
            const orders = await orderRepository.findByClientId(req.params.clientId);
            return res.json(orders);
        }
        catch (error) {
            if (error instanceof DomainError) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(400).json({ error: "Internal server error" });
        }
    }
    async start(req, res) {
        try {
            const usecase = new StartOrderUseCase(orderRepository);
            const order = await usecase.execute(req.params.id);
            res.json(order);
        }
        catch (error) {
            if (error instanceof DomainError) {
                return res.status(400).json({ error: error.message });
            }
            res.status(500).json({ error: "Internal server error" });
        }
    }
    async complete(req, res) {
        try {
            const usecase = new CompleteOrderUseCase(orderRepository);
            const order = await usecase.execute(req.params.id);
            res.json(order);
        }
        catch (error) {
            if (error instanceof DomainError) {
                return res.status(400).json({ error: error.message });
            }
            res.status(500).json({ error: "Internal server error" });
        }
    }
    async cancel(req, res) {
        try {
            const usecase = new CancelOrderUseCase(orderRepository);
            const result = await usecase.execute(req.params.id);
            res.json(result);
        }
        catch (error) {
            if (error instanceof DomainError) {
                return res.status(400).json({ error: error.message });
            }
            res.status(500).json({ error: "Internal server errer" });
        }
    }
}
//# sourceMappingURL=OrderController.js.map