import { OrderMaterialUsage } from "../../../domain/entities/OrderMaterialUsage.js";
import { OrderMaterialUsageRepository } from "../../../domain/repositories/OrderMaterialUsageRepository.js";
export declare class InMemoryMaterialUsageRepository implements OrderMaterialUsageRepository {
    private usages;
    save(usage: OrderMaterialUsage): Promise<void>;
    findByOrderId(orderId: string): Promise<OrderMaterialUsage[]>;
    findByOrderAndMaterial(orderId: string, materialId: string): Promise<OrderMaterialUsage | null>;
}
//# sourceMappingURL=InMemoryOrderMaterialUsageRepository.d.ts.map