import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class UpdatePlanUseCase {
    planRepository;
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(id, name, price, speed) {
        const plan = await this.planRepository.findById(id);
        if (!plan) {
            throw new NotFoundError("Plan not found");
        }
        plan.update(name, price, speed);
        await this.planRepository.save(plan);
        return plan;
    }
}
//# sourceMappingURL=UpdatePlanUseCase.js.map