import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { Client } from "../../../domain/entities/Client.js";



export class DeleteClientUseCase {
    constructor(
        private readonly clientRepository: ClientRepository
    ) {}
    async execute(id: string): Promise<void> {
        //buscar cliente
        const client = await this.clientRepository.findById(id);

        if (!client) {
            throw new Error("Client not found");
        }
        //si el cliente es ACTIVE
        if (client.status === "ACTIVE") {
            throw new Error("Active clients cannot be deleted")
        }

        await this.clientRepository.delete(id);
    }
   
}