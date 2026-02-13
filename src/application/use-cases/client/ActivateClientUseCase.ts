import type { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { Client } from "../../../domain/entities/Client.js";
import type { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
export class ActivateClientUseCase {
    constructor(
        private readonly clientRepository: ClientRepository,
        private readonly orderRepository: OrderRepository
    ) {}

    async execute(id: string): Promise<Client> {

        //buscar al cliente
        const client = await this.clientRepository.findById(id);
        //si no existe
        if (!client) {
            throw new Error("Client not found");
        }

        const orders = await this.orderRepository.findByClientId(id);

        const hasCompletedOrder = orders.some(order => order.status === "COMPLETED");
        
        if (!hasCompletedOrder) {
            throw new Error("Client cannot be activited without a completed order")
        }

        //activar al cliente
        client.activate();
        //guardar al cliente
        await this.clientRepository.save(client);
        //retornar al cliente
        return client;
    }
}
