import { Plan } from "../../../domain/entities/Plan.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
export declare class InMemoryPlanRepository implements PlanRepository {
    private plans;
    save(plan: Plan): Promise<void>;
    findById(id: string): Promise<Plan | null>;
    findByNameAndCompany(companyId: string, name: string): Promise<Plan | null>;
    findByCompany(companyId: string): Promise<Plan[]>;
}
//# sourceMappingURL=InMemoryPlanRepository.d.ts.map