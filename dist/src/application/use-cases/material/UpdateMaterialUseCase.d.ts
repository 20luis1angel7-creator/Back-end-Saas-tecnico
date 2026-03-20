import { Material } from "../../../domain/entities/Material.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";
export declare class UpdateMaterialUseCase {
    private readonly materialRepository;
    constructor(materialRepository: MaterialRepository);
    execute(id: string, name: string, stock: number, minStock: number, unitPrice: number, active: boolean): Promise<Material | null>;
}
//# sourceMappingURL=UpdateMaterialUseCase.d.ts.map