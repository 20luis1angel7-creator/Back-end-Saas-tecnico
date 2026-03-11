import { Material } from "../../../domain/entities/Material.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";





export class GetMaterialByIdUseCase{
    constructor(
        private readonly materialRepository: MaterialRepository
    ) {}

    async execute(id: string): Promise<Material | null> {
        const materal = await this.materialRepository.findById(id)

        if (!materal) {
            throw new NotFoundError("Material not found")
        }

        return materal
    }
}