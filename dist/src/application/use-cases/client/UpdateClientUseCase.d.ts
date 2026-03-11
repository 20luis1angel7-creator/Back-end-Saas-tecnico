import { Client } from "../../../domain/entities/Client.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
export declare class UpdateClientUseCase {
    private readonly repository;
    constructor(repository: ClientRepository);
    execute(//método que ejecuta el caso de uso.
    id: string, name: string, nickname: string, address: string, phone: string, planId: string): Promise<Client>;
}
//# sourceMappingURL=UpdateClientUseCase.d.ts.map