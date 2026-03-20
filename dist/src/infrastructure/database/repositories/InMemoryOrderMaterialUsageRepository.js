export class InMemoryMaterialUsageRepository {
    usages = [];
    async save(usage) {
        const index = this.usages.findIndex(u => u.orderId === usage.orderId &&
            u.materialId === usage.materialId);
        if (index >= 0) {
            this.usages[index] = usage;
        }
        else {
            this.usages.push(usage);
        }
    }
    async findByOrderId(orderId) {
        return this.usages.filter(u => u.orderId === orderId);
    }
    async findByOrderAndMaterial(orderId, materialId) {
        return this.usages.find(u => u.orderId === orderId && u.materialId === materialId) ?? null;
    }
}
//# sourceMappingURL=InMemoryOrderMaterialUsageRepository.js.map