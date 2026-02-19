import { Client } from "../../../domain/entities/Client.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
export declare class InMemoryClientRepository implements ClientRepository {
    private clients;
    save(client: Client): Promise<void>;
    findById(id: string): Promise<Client | null>;
    findByCedula(cedula: string): Promise<Client | null>;
    findAll(): Promise<Client[]>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=InMemoryClientRepository.d.ts.map