import { Plan } from "../../../domain/entities/Plan.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";



export class InMemoryPlanRepository implements PlanRepository {
    
    //estudiarlo
    private plans = new Map<string, Plan[]>(); 

    async save(plan: Plan): Promise<void> {
        const companyPlans = this.plans.get(plan.companyId) ?? []

        const index = companyPlans.findIndex(p => p.id === plan.id)

        if (index !== -1) {
            companyPlans[index] = plan
        } else {
            companyPlans.push(plan)
        }

        this.plans.set(plan.companyId, companyPlans);
    }

    async findById(id: string): Promise<Plan | null> {
        for (const companyPlans of this.plans.values()) {
            const plan = companyPlans.find(p => p.id === id)
            if (plan) {
                return plan
            }
        }
        return null
    }

    async findByNameAndCompany(companyId: string, name: string): Promise<Plan | null> {
        const companyPlans = this.plans.get(companyId) ?? []
        return companyPlans.find(p => p.name === name) ?? null
    }

    async findByCompany(companyId: string): Promise<Plan[]> {
        return this.plans.get(companyId) ?? []
    }

}