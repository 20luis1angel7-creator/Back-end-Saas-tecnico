import { Order } from "../entities/Order.js";

export interface OrderRepository {
    save(order: Order): Promise<void>;
    findById(id: string): Promise<Order |null>;
    findByClientId(clientId: string): Promise<Order[]>;
}




