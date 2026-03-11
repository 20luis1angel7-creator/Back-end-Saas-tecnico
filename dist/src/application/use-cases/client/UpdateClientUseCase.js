export class UpdateClientUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(//método que ejecuta el caso de uso.
    id, name, nickname, address, phone, planId) {
        //buscar cliente
        const client = await this.repository.findById(id);
        if (!client) {
            throw new Error("Client not found");
        }
        //actualizar datos
        client.updateData(name, nickname, address, phone, planId);
        //guada cliente actualizado
        await this.repository.save(client);
        //retorna el cliente
        return client;
    }
}
//# sourceMappingURL=UpdateClientUseCase.js.map