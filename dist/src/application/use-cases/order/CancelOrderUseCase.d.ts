import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { Order } from "../../../domain/entities/Order.js";
export declare class CancelOrderUseCase {
    private readonly orderRepository;
    constructor(orderRepository: OrderRepository);
    execute(id: string): Promise<Order>;
}
//# sourceMappingURL=CancelOrderUseCase.d.ts.map