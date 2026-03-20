import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class UpdateMaterialUseCase {
    materialRepository;
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute(id, name, stock, minStock, unitPrice, active) {
        const material = await this.materialRepository.findById(id);
        if (!material) {
            throw new NotFoundError("Materila not found");
        }
        material.update(name, stock, minStock, unitPrice, active);
        await this.materialRepository.save(material);
        return material;
    }
}
//# sourceMappingURL=UpdateMaterialUseCase.js.map