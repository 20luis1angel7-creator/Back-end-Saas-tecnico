import { Client } from "../../../domain/entities/Client.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";

export class InMemoryClientRepository implements ClientRepository {
    private clients: Client[] = []; // esta es la memoria(array)

    async save(client: Client): Promise<void> {
        const existingIndex = this.clients.findIndex(c => c.id === client.id);

        if (existingIndex >= 0) {
            this.clients[existingIndex] = client;
        } else {
            this.clients.push(client);
        }
    }

    async findById(id: string): Promise<Client | null> {
        return this.clients.find(c => c.id === id) || null;
    }

    async findByCedula(cedula: string): Promise<Client | null> {
        return this.clients.find(c => c.cedula === cedula) || null;
    }

    async findAll(): Promise<Client[]> {
        return this.clients;
    }
}



