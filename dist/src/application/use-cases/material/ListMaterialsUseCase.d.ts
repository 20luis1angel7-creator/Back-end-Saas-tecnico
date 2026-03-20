import { Material } from "../../../domain/entities/Material.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";
export declare class ListMaterailsUseCase {
    private readonly materialRepository;
    constructor(materialRepository: MaterialRepository);
    execute(id: string): Promise<Material[]>;
}
//# sourceMappingURL=ListMaterialsUseCase.d.ts.map