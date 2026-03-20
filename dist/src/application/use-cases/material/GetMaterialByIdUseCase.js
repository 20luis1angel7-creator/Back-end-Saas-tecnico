import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class GetMaterialByIdUseCase {
    materialRepository;
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute(id) {
        const materal = await this.materialRepository.findById(id);
        if (!materal) {
            throw new NotFoundError("Material not found");
        }
        return materal;
    }
}
//# sourceMappingURL=GetMaterialByIdUseCase.js.map