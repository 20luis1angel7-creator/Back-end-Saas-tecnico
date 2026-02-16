import { Order } from "../../../domain/entities/Order.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";

export class CompleteOrderUseCase {
    constructor( private readonly repository: OrderRepository ) {}

    async execute(id: string): Promise<Order> {
        const order = await this.repository.findById(id);

        if(!order) {
            throw new NotFoundError("Order not found")
        }

        order.complete();

        await this.repository.save(order);

        return order;
    }
}















