import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
import { Plan } from "../../../domain/entities/Plan.js";
import { BusinessRuleError } from "../../../domain/errors/DomainErrors.js";
import { randomUUID } from "node:crypto";

//esto es un “molde” que dice cómo debe lucir la información que recibimos para crear un plan.
interface CreatePlanDTO {
    companyId: string,
    name: string,
    price: number,
    speed: number,
}

export class CreatePlanUseCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) {}

    async execute(data: CreatePlanDTO): Promise<void> {
        //Buscar plan existente
        const existingPlan = await this.planRepository.findByNameAndCompany(data.companyId,data.name)

        if (existingPlan) {
            throw new BusinessRuleError("Plan with this name already exists")
        }
        //Crear un nuevo plan
        const plan = new Plan({
            id: randomUUID(),
            companyId: data.companyId,
            name: data.name,
            price: data.price,
            speed: data.speed
        })
        //Guardar el plan en el repositorio
        await this.planRepository.save(plan)

    }
}