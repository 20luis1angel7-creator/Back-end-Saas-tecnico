import { BusinessRuleError, NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { OrderMaterialUsage } from "../../../domain/entities/OrderMaterialUsage.js";
export class RegisterMaterialUsageUseCase {
    orderRepository;
    usageRepository;
    constructor(orderRepository, usageRepository) {
        this.orderRepository = orderRepository;
        this.usageRepository = usageRepository;
    }
    async execute(orderId, materialId, quantity) {
        const order = await this.orderRepository.findById(orderId);
        if (!order) {
            throw new NotFoundError("Order not found");
        }
        if (order.status === "COMPLETED") {
            throw new BusinessRuleError("Cannot register materials for a completed order");
        }
        const existingUsage = await this.usageRepository
            .findByOrderAndMaterial(orderId, materialId);
        if (existingUsage) {
            const updatedUsage = new OrderMaterialUsage(orderId, materialId, existingUsage.quantity + quantity);
            await this.usageRepository.save(updatedUsage);
        }
        else {
            const usage = new OrderMaterialUsage(orderId, materialId, quantity);
            await this.usageRepository.save(usage);
        }
    }
}
//# sourceMappingURL=RegisterMaterialUsageUseCase.js.map