import { Plan } from "../../../domain/entities/Plan.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";



export class InMemoryPlanRepository implements PlanRepository {
    
    private plans = new Map<string, Plan>(); 

    async save(plan: Plan): Promise<void> {
        this.plans.set(plan.id, plan)
    }

    async findById(id: string): Promise<Plan | null> {
        return this.plans.get(id) || null
    }

}