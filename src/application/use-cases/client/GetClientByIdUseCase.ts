import type { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { Client } from "../../../domain/entities/Client.js";

export class GetClientByIdUseCase{
    constructor(private readonly repository: ClientRepository) {}

    async execute(id: string): Promise<Client> {
        //buscar
        const client = await this.repository.findById(id);
        //si no existe
        if(!client){
            throw new Error("Cliet not found");
        }
        //si existe devuelvelo(retornalo)
        return client;
    }
}

