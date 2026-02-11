import { Client } from "../../../domain/entities/Client.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";

export class ListClientsUseCase {
    constructor(private readonly repository: ClientRepository) {}

    async execute(): Promise<Client[]> {
        return this.repository.findAll();


    }
}

