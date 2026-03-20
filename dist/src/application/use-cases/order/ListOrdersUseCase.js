export class ListOrdersUseCase {
    oredrRepository;
    constructor(oredrRepository) {
        this.oredrRepository = oredrRepository;
    }
    async execute() {
        return this.oredrRepository.findAll();
    }
}
//# sourceMappingURL=ListOrdersUseCase.js.map