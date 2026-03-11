import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class DeactivatePlanUseCase {
    planRepository;
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(planId) {
        const plan = await this.planRepository.findById(planId);
        if (!plan) {
            throw new NotFoundError("Plan not found");
        }
        plan.deactivate();
        await this.planRepository.save(plan);
        return plan;
    }
}
//# sourceMappingURL=DeactivatePlanUseCase.js.map