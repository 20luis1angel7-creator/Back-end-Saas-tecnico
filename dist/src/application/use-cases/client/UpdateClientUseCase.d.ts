import { Client } from "../../../domain/entities/Client.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
interface UpdateClientDTO {
    id: string;
    name: string;
    nickname: string;
    address: string;
    phone: string;
    planId: string;
    routerSerial: string;
}
export declare class UpdateClientUseCase {
    private readonly repository;
    constructor(repository: ClientRepository);
    execute(data: UpdateClientDTO): Promise<Client>;
}
export {};
//# sourceMappingURL=UpdateClientUseCase.d.ts.map