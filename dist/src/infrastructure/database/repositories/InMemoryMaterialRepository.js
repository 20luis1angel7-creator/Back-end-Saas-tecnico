export class InMemoryMaterialRepository {
    materials = new Map();
    async findById(id) {
        return this.materials.get(id) ?? null;
    }
    async save(material) {
        this.materials.set(material.id, material);
    }
    async findAll() {
        return Array.from(this.materials.values());
    }
}
//# sourceMappingURL=InMemoryMaterialRepository.js.map