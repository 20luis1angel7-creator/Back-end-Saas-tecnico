import { Order } from "../../../domain/entities/Order.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";
import { OrderMaterialUsageRepository } from "../../../domain/repositories/OrderMaterialUsageRepository.js";
export declare class CompleteOrderUseCase {
    private readonly repository;
    private readonly materialRepository;
    private readonly orderMaterialUsageRepository;
    constructor(repository: OrderRepository, materialRepository: MaterialRepository, orderMaterialUsageRepository: OrderMaterialUsageRepository);
    execute(id: string): Promise<Order>;
}
//# sourceMappingURL=CompleteOrderUseCase.d.ts.map