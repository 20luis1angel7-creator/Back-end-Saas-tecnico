export class InMemoryPlanRepository {
    //almacenamiento
    plans = [];
    //Este método guarda o actualiza un plan.
    async save(plan) {
        const existingIndex = this.plans.findIndex(c => c.id === plan.id);
        if (existingIndex >= 0) {
            this.plans[existingIndex] = plan;
        }
        else {
            this.plans.push(plan);
        }
    }
    //Este método busca un plan por su ID.
    async findById(id) {
        return this.plans.find(c => c.id === id) || null;
    }
    //Este metodo busca por plan por nombre + empresa
    async findAll() {
        return this.plans;
    }
}
//# sourceMappingURL=InMemoryPlanRepository.js.map