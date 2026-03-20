import { Material } from "../../../domain/entities/Material.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";
interface MaterialDTO {
    name: string;
    stock: number;
    minStock: number;
    unitPrice: number;
}
export declare class CreateMaterialUseCase {
    private readonly materialRepository;
    constructor(materialRepository: MaterialRepository);
    execute(data: MaterialDTO): Promise<Material>;
}
export {};
//# sourceMappingURL=CreateMaterialUseCase.d.ts.map