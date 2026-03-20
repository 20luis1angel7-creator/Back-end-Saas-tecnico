import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class SuspendClientUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        //buscar cliente
        const client = await this.repository.findById(id);
        //si no existe
        if (!client) {
            throw new NotFoundError("Client not found");
        }
        //suspender
        client.suspend();
        //guardar
        await this.repository.save(client);
        //retornar
        return client;
    }
}
//# sourceMappingURL=SuspendClientUseCase.js.map