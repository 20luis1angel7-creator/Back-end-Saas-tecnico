import { Material } from "../../../domain/entities/Material.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";



export class ListMaterailsUseCase {
    constructor(
        private readonly materialRepository: MaterialRepository
    ){}

    async execute(): Promise<Material[]> {
        const material = await this.materialRepository.findAll()

        return material
    }
}