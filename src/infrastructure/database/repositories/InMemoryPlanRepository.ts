import { Plan } from "../../../domain/entities/Plan.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";




export class InMemoryPlanRepository implements PlanRepository {
    
    //almacenamiento
    private plans: Plan[] = [];

    //Este método guarda o actualiza un plan.
    async save(plan: Plan): Promise<void> {
        const existingIndex = this.plans.findIndex(c => c.id === plan.id);

        if (existingIndex >= 0) {
            this.plans[existingIndex] = plan;
        } else {
            this.plans.push(plan);
        }
    }

    //Este método busca un plan por su ID.
    async findById(id: string): Promise<Plan | null> {
            return this.plans.find(c => c.id === id) || null;
        }

    //Este metodo busca por plan por nombre + empresa

    async findAll(): Promise<Plan[]> {
        return this.plans;
    }
}