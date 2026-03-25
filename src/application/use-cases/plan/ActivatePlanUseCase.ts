import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";



export class ActivatePlanUseCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) {}

    async execute(id: string): Promise<void> {
        const plan = await this.planRepository.findById(id)

        if (!plan) {
            throw new NotFoundError("Plan not found")
        }

        plan.activate()
        await this.planRepository.save(plan)
    }
}