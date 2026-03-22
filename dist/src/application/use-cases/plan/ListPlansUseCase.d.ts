import { Plan } from "../../../domain/entities/Plan.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
export declare class ListPlansUseCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    execute(): Promise<Plan[]>;
}
//# sourceMappingURL=ListPlansUseCase.d.ts.map