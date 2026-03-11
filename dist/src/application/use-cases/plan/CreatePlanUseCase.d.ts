import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
interface CreatePlanDTO {
    companyId: string;
    name: string;
    price: number;
    speed: number;
}
export declare class CreatePlanUseCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    execute(data: CreatePlanDTO): Promise<void>;
}
export {};
//# sourceMappingURL=CreatePlanUseCase.d.ts.map