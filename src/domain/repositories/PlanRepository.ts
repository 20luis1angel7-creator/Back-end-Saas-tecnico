import { Plan } from "../entities/Plan.js";

export interface PlanRepository {
    save(plan: Plan): Promise<void>
    findById(id: string): Promise<Plan | null>;
    findByNameAndCompany(companyId: string, name: string): Promise<Plan |null>
    findByCompany(companyId: string): Promise<Plan[]>
}