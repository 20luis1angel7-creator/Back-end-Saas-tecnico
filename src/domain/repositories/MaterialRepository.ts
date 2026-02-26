import { Material } from "../entities/Material.js";

export interface MaterialRepository {
    save(material: Material): Promise<void>;
    findById(id: string): Promise<Material | null>;
    findAll(): Promise<Material[]>;
}
