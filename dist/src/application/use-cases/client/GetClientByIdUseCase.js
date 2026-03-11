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
            throw new Error("Client not found");
        }
        //si existe devuelvelo(retornalo)
        return client;
    }
}
//# sourceMappingURL=GetClientByIdUseCase.js.map