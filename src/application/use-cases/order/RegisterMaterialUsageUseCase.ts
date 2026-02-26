import { BusinessRuleError, NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { OrderMaterialUsageRepository } from "../../../domain/repositories/OrderMaterialUsageRepository.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { OrderMaterialUsage } from "./OrderMaterialUsage.js";


export class RegisterMaterialUsageUseCase {
    constructor(
        private readonly orderRepository: OrderRepository,
        private readonly usageRepository: OrderMaterialUsageRepository
    ) {}

    async execute(orderId: string, materialId: string, quantity: number): Promise<void> {

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