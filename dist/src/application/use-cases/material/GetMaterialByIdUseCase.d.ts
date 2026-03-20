import { Material } from "../../../domain/entities/Material.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";
export declare class GetMaterialByIdUseCase {
    private readonly materialRepository;
    constructor(materialRepository: MaterialRepository);
    execute(id: string): Promise<Material | null>;
}
//# sourceMappingURL=GetMaterialByIdUseCase.d.ts.map