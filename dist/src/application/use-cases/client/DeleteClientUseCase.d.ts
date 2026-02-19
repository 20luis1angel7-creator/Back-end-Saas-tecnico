import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
export declare class DeleteClientUseCase {
    private readonly clientRepository;
    constructor(clientRepository: ClientRepository);
    execute(id: string): Promise<void>;
}
//# sourceMappingURL=DeleteClientUseCase.d.ts.map