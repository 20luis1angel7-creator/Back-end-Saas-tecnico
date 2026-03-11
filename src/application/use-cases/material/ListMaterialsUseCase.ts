import { Material } from "../../../domain/entities/Material.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";



export class ListMaterailsUseCase {
    constructor(
        private readonly materialRepository: MaterialRepository
    ){}

    async execute(): Promise<Material[]> {
        return await this.materialRepository.findAll()
    }
}