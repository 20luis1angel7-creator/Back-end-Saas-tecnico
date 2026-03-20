import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
import { Plan } from "../../../domain/entities/Plan.js";
export declare class DeactivatePlanUseCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    execute(planId: string): Promise<Plan>;
}
//# sourceMappingURL=DeactivatePlanUseCase.d.ts.map