import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class ListPlansUseCase {
    planRepository;
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute() {
        const company = await this.planRepository.findAll();
        if (!company) {
            throw new NotFoundError("Plan not found");
        }
        return company;
    }
}
//# sourceMappingURL=ListPlansUseCase.js.map