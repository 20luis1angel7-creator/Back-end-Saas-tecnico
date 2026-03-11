import { OrderMaterialUsageRepository } from "../../../domain/repositories/OrderMaterialUsageRepository.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
export declare class RegisterMaterialUsageUseCase {
    private readonly orderRepository;
    private readonly usageRepository;
    constructor(orderRepository: OrderRepository, usageRepository: OrderMaterialUsageRepository);
    execute(orderId: string, materialId: string, quantity: number): Promise<void>;
}
//# sourceMappingURL=RegisterMaterialUsageUseCase.d.ts.map