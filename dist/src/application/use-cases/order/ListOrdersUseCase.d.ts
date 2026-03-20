import { Order } from "../../../domain/entities/Order.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
export declare class ListOrdersUseCase {
    private readonly oredrRepository;
    constructor(oredrRepository: OrderRepository);
    execute(): Promise<Order[]>;
}
//# sourceMappingURL=ListOrdersUseCase.d.ts.map