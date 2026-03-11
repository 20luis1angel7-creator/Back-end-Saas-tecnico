import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { Order } from "../../../domain/entities/Order.js";
export declare class InMemoryOrderRepository implements OrderRepository {
    private orders;
    save(order: Order): Promise<void>;
    findById(id: string): Promise<Order | null>;
    findByClientId(clientId: string): Promise<Order[]>;
}
//# sourceMappingURL=InMemoryOrderRepository.d.ts.map