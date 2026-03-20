import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class UpdateClientUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    //método que ejecuta el caso de uso.
    async execute(data) {
        //buscar cliente
        const client = await this.repository.findById(data.id);
        if (!client) {
            throw new NotFoundError("Client not found");
        }
        //actualizar datos
        client.updateData(data.name, data.nickname, data.address, data.phone, data.planId, data.routerSerial);
        //guada cliente actualizado
        await this.repository.save(client);
        //retorna el cliente
        return client;
    }
}
//# sourceMappingURL=UpdateClientUseCase.js.map