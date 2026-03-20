import type { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { Client } from "../../../domain/entities/Client.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";

export class GetClientByIdUseCase{
    constructor(private readonly repository: ClientRepository) {}

    async execute(id: string): Promise<Client> {
        //buscar
        const client = await this.repository.findById(id);
        //si no existe
        if(!client){
            throw new NotFoundError("Client not found");
        }
        //si existe devuelvelo(retornalo)
        return client;
    }
}

