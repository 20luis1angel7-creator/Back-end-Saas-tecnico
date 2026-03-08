import { Plan } from "../../../domain/entities/Plan.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";


export class GetPlanByIdUseCase {
    constructor (
        private readonly planRepository: PlanRepository
    ) {}

    async execute(planId: string): Promise<Plan> {
        const plan = await this.planRepository.findById(planId)

        if (!plan) {
            throw new NotFoundError("Plan not found")
        }

        return plan
    }
}