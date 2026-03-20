import { Plan } from "../../../domain/entities/Plan.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
export declare class GetPlanByIdUseCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    execute(planId: string): Promise<Plan>;
}
//# sourceMappingURL=GetPlanByIdUseCase.d.ts.map