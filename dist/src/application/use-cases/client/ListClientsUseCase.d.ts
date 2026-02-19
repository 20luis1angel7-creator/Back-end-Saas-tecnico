import { Client } from "../../../domain/entities/Client.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
export declare class ListClientsUseCase {
    private readonly repository;
    constructor(repository: ClientRepository);
    execute(): Promise<Client[]>;
}
//# sourceMappingURL=ListClientsUseCase.d.ts.map