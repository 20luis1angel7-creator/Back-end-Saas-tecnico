import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { Client } from "../../../domain/entities/Client.js";

export class ActivateClientUseCase {
    constructor(private readonly repository: ClientRepository) {}

    async execute(id: string): Promise<Client> {

        //buscar al cliente
        const client = await this.repository.findById(id);
        //si no existe
        if (!client) {
            throw new Error("Client not found");
        }
        //activar al cliente
        client.activate();
        //guardar al cliente
        await this.repository.save(client);
        //retornar al cliente
        return client;
    }
}