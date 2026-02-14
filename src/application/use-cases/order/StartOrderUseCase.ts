import { callbackify } from "node:util";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { Order } from "../../../domain/entities/Order.js";




export class StartOrderUseCase {
    constructor(private readonly orderRepository: OrderRepository) {}

    async execute(id: string): Promise<Order> {
        const order = await this.orderRepository.findById(id);

        if (!order) {
            throw new Error("Order not found");
        }

        order.start();

        await this.orderRepository.save(order);

        return order;
    }
}

