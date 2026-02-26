import { Material } from "../../../domain/entities/Material.js";


export class InmMemoryMaterialRepository {
    private materials: Map <string, Material> = new Map();

    async findById(id: string): Promise<Material | null> {
        return this.materials.get(id) ?? null;
    }

    async save(material: Material): Promise<void> {
        this.materials.set(material.id, material);
    }

    async findAll(): Promise<Material[]> {
        return Array.from(this.materials.values());
    }
}