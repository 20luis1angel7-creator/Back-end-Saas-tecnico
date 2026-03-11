export class ListClientsUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return this.repository.findAll();
    }
}
//# sourceMappingURL=ListClientsUseCase.js.map