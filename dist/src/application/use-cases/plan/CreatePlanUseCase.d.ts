import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
import { Plan } from "../../../domain/entities/Plan.js";
interface CreatePlanDTO {
    id: string;
    name: string;
    price: number;
    speed: number;
}
export declare class CreatePlanUseCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    execute(data: CreatePlanDTO): Promise<Plan>;
}
export {};
//# sourceMappingURL=CreatePlanUseCase.d.ts.map