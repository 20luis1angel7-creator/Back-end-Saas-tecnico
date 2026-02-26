import { Order } from "../../../domain/entities/Order.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";
import { OrderMaterialUsageRepository } from "../../../domain/repositories/OrderMaterialUsageRepository.js";

export class CompleteOrderUseCase {
    constructor( 
        private readonly repository: OrderRepository,
        private readonly materialRepository: MaterialRepository,
        private readonly usageRepository: OrderMaterialUsageRepository
    ) {}

    async execute(id: string): Promise<Order> {
        const order = await this.repository.findById(id);

        if(!order) {
            throw new NotFoundError("Order not found")
        }

        const usages = await this.usageRepository.findByOrderId(id);

        for (const usage of usages){
            const material = await this.materialRepository.findById(usage.materialId)

            if (!material) {
                throw new NotFoundError("Material not found")
            }

            if (usage.quantity > material.stock){
                throw new Error("Not enough stock to complete order")
            }
        }

        for (const usage of usages) {
            const material = await this.materialRepository.findById(usage.materialId)
            material!.consume(usage.quantity);
            await this.materialRepository.save(material!)
        }

        order.complete();

        await this.repository.save(order);

        return order;
    }
}















