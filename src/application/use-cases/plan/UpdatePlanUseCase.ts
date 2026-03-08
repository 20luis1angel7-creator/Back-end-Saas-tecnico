import { Plan } from "../../../domain/entities/Plan.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";


export class UpdatePlanUseCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) {}

    async execute(id: string, name: string, price: number, speed: number): Promise<Plan> {
        const plan = await this.planRepository.findById(id)

        if (!plan) {
            throw new NotFoundError("Plan not found")
        }

        plan.update(name, price, speed)
        
        await this.planRepository.save(plan)

        return plan
    }
}