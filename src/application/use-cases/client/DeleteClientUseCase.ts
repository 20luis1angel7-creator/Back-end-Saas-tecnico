import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { Client } from "../../../domain/entities/Client.js";
import { BusinessRuleError, NotFoundError } from "../../../domain/errors/DomainErrors.js";



export class DeleteClientUseCase {
    constructor(
        private readonly clientRepository: ClientRepository
    ) {}
    async execute(id: string): Promise<void> {
        //buscar cliente
        const client = await this.clientRepository.findById(id);

        if (!client) {
            throw new NotFoundError("Client not found");
        }

        //codigo repetido, en client.ts. 
        // Recomendacion: client.delete();
        //si el cliente es ACTIVE
        if (client.status === "ACTIVE") {
            throw new BusinessRuleError("Active clients cannot be deleted")
        }
        //estas usando hard delete, es mejor utilizar soft delete
        await this.clientRepository.delete(id);
    }
   
}