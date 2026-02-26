import { OrderMaterialUsage } from "../entities/OrderMaterialUsage.js";

export interface OrderMaterialUsageRepository {
    save(usage: OrderMaterialUsage): Promise<void>;
    findByOrderId(orderId: string): Promise<OrderMaterialUsage[]>;
    findByOrderAndMaterial(orderId: string, materialId: string): Promise<OrderMaterialUsage | null>;
}