import { Material } from "../../../domain/entities/Material.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";
export declare class DeactivateMaterialUseCase {
    private readonly materialRepository;
    constructor(materialRepository: MaterialRepository);
    execute(id: string): Promise<Material | null>;
}
//# sourceMappingURL=DeactivateMaterialUseCase.d.ts.map