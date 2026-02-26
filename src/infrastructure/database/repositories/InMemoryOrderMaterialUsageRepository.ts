import { OrderMaterialUsage } from "../../../domain/entities/OrderMaterialUsage.js";
import { OrderMaterialUsageRepository } from "../../../domain/repositories/OrderMaterialUsageRepository.js";


export class InMemoryMaterialUsageRepository implements OrderMaterialUsageRepository {
    private usages: OrderMaterialUsage[] = [];

    async save(usage: OrderMaterialUsage): Promise<void> {
        const index = this.usages.findIndex(
            u => u.orderId === usage.orderId &&
            u.materialId === usage.materialId
        );

        if (index >= 0) {
            this.usages[index] = usage;
        } else {
            this.usages.push(usage)
        }
    }

    async findByOrderId(orderId: string): Promise<OrderMaterialUsage[]> {
        return this.usages.filter(u => u.orderId === orderId)
    }
    async findByOrderAndMaterial(orderId: string, materialId: string): Promise<OrderMaterialUsage | null> {
        return this.usages.find(
            u => u.orderId === orderId && u.materialId === materialId
        ) ?? null;
}
}