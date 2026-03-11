import { Plan } from "../../../domain/entities/Plan.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
export declare class UpdatePlanUseCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    execute(id: string, name: string, price: number, speed: number): Promise<Plan>;
}
//# sourceMappingURL=UpdatePlanUseCase.d.ts.map