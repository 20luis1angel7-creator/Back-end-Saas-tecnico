import { Client } from "../entities/Client.js";
export interface ClientRepository {
    save(client: Client): Promise<void>;
    findById(id: string): Promise<Client | null>;
    findByCedula(cedula: string): Promise<Client | null>;
    findAll(): Promise<Client[]>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=ClientRepository.d.ts.map