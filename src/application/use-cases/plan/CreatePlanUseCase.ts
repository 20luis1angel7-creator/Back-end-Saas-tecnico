import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
import { Plan } from "../../../domain/entities/Plan.js";
import { BusinessRuleError } from "../../../domain/errors/DomainErrors.js";
import { randomUUID } from "node:crypto";

interface CreatePlanDTO {
    companyId: string,
    name: string,
    price: number,
    speed: number,
}

export class CreatePlanUseCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) {}

    async execute(data: CreatePlanDTO): Promise<void> {
        const existingPlan = await this.planRepository.findByNameAndCompany(data.companyId,data.name)

        if (existingPlan) {
            throw new BusinessRuleError("Plan with this name already exists")
        }

        const plan = new Plan({
            id: randomUUID(),
            companyId: data.companyId,
            name: data.name,
            price: data.price,
            speed: data.speed
    })

        await this.planRepository.save(plan)

    }
}