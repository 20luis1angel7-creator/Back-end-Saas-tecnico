import { Plan } from "../../../domain/entities/Plan.js";
import { BusinessRuleError } from "../../../domain/errors/DomainErrors.js";
import { randomUUID } from "node:crypto";
export class CreatePlanUseCase {
    planRepository;
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(data) {
        //Buscar plan existente
        const existingPlan = await this.planRepository.findById(data.id);
        if (existingPlan) {
            throw new BusinessRuleError("Plan with this name already exists");
        }
        //Crear un nuevo plan
        const plan = new Plan({
            id: randomUUID(),
            name: data.name,
            price: data.price,
            speed: data.speed
        });
        //Guardar el plan en el repositorio
        await this.planRepository.save(plan);
        return plan;
    }
}
//# sourceMappingURL=CreatePlanUseCase.js.map