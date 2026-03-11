import { Material } from "../../../domain/entities/Material.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";



export class UpdateMaterialUseCase {
    constructor(
        private readonly materialRepository: MaterialRepository
    ){}

    async execute(name: string,
        stock: number,
        minStock: number,
        unitPrice: number,
        active: boolean 
    ): Promise<Material | null> {

        const material = await this.materialRepository.findById(name) 

        if(!material) {
            throw new NotFoundError("Materila not found")
        }

        material.update(name, stock, minStock, unitPrice, active)

        await this.materialRepository.save(material)

        return material
    }
}