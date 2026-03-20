import { randomUUID } from "node:crypto"
import { Material } from "../../../domain/entities/Material.js"
import { NotFoundError } from "../../../domain/errors/DomainErrors.js"
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js"




interface MaterialDTO {
    name:string,
    stock:number,
    minStock: number,
    unitPrice: number
    
}

export class CreateMaterialUseCase {
    constructor(
        private readonly materialRepository: MaterialRepository
    ) {}

    async execute(data: MaterialDTO) : Promise<Material> {
        

        const material = new Material(
            randomUUID(),
            data.name,
            data.stock,
            data.minStock,
            data.unitPrice,
        )

        await this.materialRepository.save(material)

        return material
    }
}