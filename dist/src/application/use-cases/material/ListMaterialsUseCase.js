export class ListMaterailsUseCase {
    materialRepository;
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute() {
        const material = await this.materialRepository.findAll();
        return material;
    }
}
//# sourceMappingURL=ListMaterialsUseCase.js.map