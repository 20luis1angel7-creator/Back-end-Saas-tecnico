import { Material } from "../../../domain/entities/Material.js";
export declare class InMemoryMaterialRepository {
    private materials;
    findById(id: string): Promise<Material | null>;
    save(material: Material): Promise<void>;
    findAll(): Promise<Material[]>;
}
//# sourceMappingURL=InMemoryMaterialRepository.d.ts.map