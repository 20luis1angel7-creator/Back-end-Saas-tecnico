import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class DeactivateMaterialUseCase {
    materialRepository;
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute(id) {
        const material = await this.materialRepository.findById(id);
        if (!material) {
            throw new NotFoundError("Material not found");
        }
        material.deactive();
        await this.materialRepository.save(material);
        return material;
    }
}
//# sourceMappingURL=DeactivateMaterialUseCase.js.map