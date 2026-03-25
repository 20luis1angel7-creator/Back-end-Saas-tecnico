import { BusinessRuleError, NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { OrderMaterialUsageRepository } from "../../../domain/repositories/OrderMaterialUsageRepository.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { OrderMaterialUsage } from "../../../domain/entities/OrderMaterialUsage.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";

export class RegisterMaterialUsageUseCase {
    constructor(
        private readonly orderRepository: OrderRepository,
        private readonly usageRepository: OrderMaterialUsageRepository,
        private readonly materialRepository: MaterialRepository
    ) {}

    async execute(orderId: string, materialId: string, quantity: number): Promise<void> {
        const order = await this.orderRepository.findById(orderId);

        if (!order) {
            throw new NotFoundError("Order not found");
        }

        if (order.status === "COMPLETED") {
            throw new BusinessRuleError("Cannot register materials for a completed order");
        }

        const material = await this.materialRepository.findById(materialId)

        if (!material) {
            throw new NotFoundError("Material not found")
        }

        if (quantity <= 0) {
            throw new BusinessRuleError("Quantity must be greater than zero");
        }

        const existingUsage = await this.usageRepository.findByOrderAndMaterial(orderId, materialId);

        if (existingUsage) {
            const updatedUsage = new OrderMaterialUsage(
                orderId,
                materialId,
                existingUsage.quantity + quantity
            );

            await this.usageRepository.save(updatedUsage);
        } else {
            const usage = new OrderMaterialUsage(orderId, materialId, quantity);
            await this.usageRepository.save(usage);
        }
    }
}