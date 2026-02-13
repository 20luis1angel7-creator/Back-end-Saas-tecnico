import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { Order } from "../../../domain/entities/Order.js";



export class InMemoryOrderRepository implements OrderRepository {
    private orders: Order[] = [];

    async save(order: Order): Promise<void> {
        const existingIndex = this.orders.findIndex(o => o.id === order.id);

        if(existingIndex >= 0) {
            this.orders[existingIndex] = order;
        } else {
            this.orders.push(order);
        }
    }

    async findById(id: string): Promise<Order | null>{
        const order = this.orders.find(o => o.id === id);
        return order ?? null;
    }

    async findByClientId(clientId: string): Promise<Order[]> {
        return this.orders.filter(o => o.clientId === clientId)
    }
}



