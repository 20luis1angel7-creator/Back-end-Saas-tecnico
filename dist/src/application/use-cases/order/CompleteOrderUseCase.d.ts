import { Order } from "../../../domain/entities/Order.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
export declare class CompleteOrderUseCase {
    private readonly repository;
    constructor(repository: OrderRepository);
    execute(id: string): Promise<Order>;
}
//# sourceMappingURL=CompleteOrderUseCase.d.ts.map