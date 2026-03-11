import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class GetPlanByIdUseCase {
    planRepository;
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(planId) {
        const plan = await this.planRepository.findById(planId);
        if (!plan) {
            throw new NotFoundError("Plan not found");
        }
        return plan;
    }
}
//# sourceMappingURL=GetPlanByIdUseCase.js.map