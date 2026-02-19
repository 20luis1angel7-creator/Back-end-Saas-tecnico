export class InMemoryOrderRepository {
    orders = [];
    async save(order) {
        const existingIndex = this.orders.findIndex(o => o.id === order.id);
        if (existingIndex >= 0) {
            this.orders[existingIndex] = order;
        }
        else {
            this.orders.push(order);
        }
    }
    async findById(id) {
        const order = this.orders.find(o => o.id === id);
        return order ?? null;
    }
    async findByClientId(clientId) {
        return this.orders.filter(o => o.clientId === clientId);
    }
}
//# sourceMappingURL=InMemoryOrderRepository.js.map