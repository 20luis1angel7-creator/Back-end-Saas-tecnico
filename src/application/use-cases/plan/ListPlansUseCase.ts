import { Plan } from "../../../domain/entities/Plan.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";



export class ListPlansUseCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) {}

    async execute(): Promise<Plan[]> {
        const company = await this.planRepository.findAll()

        if (!company) {
            throw new NotFoundError("Plan not found")
        }

        return company
    }
}