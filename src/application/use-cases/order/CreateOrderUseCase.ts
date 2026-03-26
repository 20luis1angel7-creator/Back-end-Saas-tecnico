import { randomUUID } from "crypto";
import { Order } from "../../../domain/entities/Order.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";

interface CreateOrderDTO {
    cedula: string;
}

export class CreateOrderUseCase {
    constructor(
        private readonly clientRepository: ClientRepository,
        private readonly orderRepository: OrderRepository
    ) {}

    async execute(data: CreateOrderDTO): Promise<Order> {
        const client = await this.clientRepository.findByCedula(data.cedula);

        if (!client) {
            throw new NotFoundError("Client not found with this cedula");
        }

        const order = new Order(
            randomUUID(),
            client.id,
            "PENDING",
            new Date()
        );

        await this.orderRepository.save(order);

        return order;
    }
}