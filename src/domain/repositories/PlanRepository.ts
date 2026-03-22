import { Plan } from "../entities/Plan.js";

export interface PlanRepository {
    save(plan: Plan): Promise<void>
    findById(id: string): Promise<Plan | null>;
    findAll(): Promise<Plan[]>;
}