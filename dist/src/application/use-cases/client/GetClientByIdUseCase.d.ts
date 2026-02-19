import type { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { Client } from "../../../domain/entities/Client.js";
export declare class GetClientByIdUseCase {
    private readonly repository;
    constructor(repository: ClientRepository);
    execute(id: string): Promise<Client>;
}
//# sourceMappingURL=GetClientByIdUseCase.d.ts.map