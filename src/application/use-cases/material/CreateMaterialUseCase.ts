import { randomUUID } from "node:crypto"
import { Material } from "../../../domain/entities/Material.js"
import { NotFoundError } from "../../../domain/errors/DomainErrors.js"
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js"




interface MaterialDTO {
    _name:string,
    _stock:number,
    _minStock: number,
    _unitPrice: number
}

export class CreateMaterialUseCase {
    constructor(
        private readonly materialRepository: MaterialRepository
    ) {}

    async execute(data: MaterialDTO) : Promise<Material> {
        

        const material = new Material(
            randomUUID(),
            data._name,
            data._stock,
            data._minStock,
            data._unitPrice,
        )

        await this.materialRepository.save(material)

        return material
    }
}