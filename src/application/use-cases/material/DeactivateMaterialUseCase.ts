import { Material } from "../../../domain/entities/Material.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";




export class DeactivateMaterialUseCase {
    constructor(
        private readonly materialRepository: MaterialRepository
    ) {}

    async execute(name: string): Promise<Material | null> {
        const material = await this.materialRepository.findByName(name)

        if(!material) {
            throw new NotFoundError("Material not found")
        }

        material.deactive()

        await this.materialRepository.save(material)

        return material
    }
}