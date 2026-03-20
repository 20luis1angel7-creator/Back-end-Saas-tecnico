import { randomUUID } from "node:crypto";
import { Material } from "../../../domain/entities/Material.js";
export class CreateMaterialUseCase {
    materialRepository;
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute(data) {
        const material = new Material(randomUUID(), data.name, data.stock, data.minStock, data.unitPrice);
        await this.materialRepository.save(material);
        return material;
    }
}
//# sourceMappingURL=CreateMaterialUseCase.js.map