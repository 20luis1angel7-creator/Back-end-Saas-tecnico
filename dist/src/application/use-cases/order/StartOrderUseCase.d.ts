import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { Order } from "../../../domain/entities/Order.js";
export declare class StartOrderUseCase {
    private readonly orderRepository;
    constructor(orderRepository: OrderRepository);
    execute(id: string): Promise<Order>;
}
//# sourceMappingURL=StartOrderUseCase.d.ts.map