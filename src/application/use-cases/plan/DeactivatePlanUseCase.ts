import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
import { Plan } from "../../../domain/entities/Plan.js";



export class DeactivatePlanUseCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) {}

    async execute(planId: string): Promise<Plan> {
        const plan = await this.planRepository.findById(planId)

        if (!plan) {
            throw new NotFoundError("Plan not found")
        }

        plan.deactivate()

        await this.planRepository.save(plan)
        return plan
    }
}