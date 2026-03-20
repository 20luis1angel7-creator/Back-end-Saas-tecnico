import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class GetClientByIdUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        //buscar
        const client = await this.repository.findById(id);
        //si no existe
        if (!client) {
            throw new NotFoundError("Client not found");
        }
        //si existe devuelvelo(retornalo)
        return client;
    }
}
//# sourceMappingURL=GetClientByIdUseCase.js.map