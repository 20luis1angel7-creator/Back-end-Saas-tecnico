import { Plan } from "../../../domain/entities/Plan.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";



export class InMemoryPlanRepository implements PlanRepository {
    
    //almacenamiento
    private plans = new Map<string, Plan[]>(); 

    //Este método guarda o actualiza un plan.
    async save(plan: Plan): Promise<void> {
        //obtener planes de la empresa
        const companyPlans = this.plans.get(plan.companyId) ?? []

        //buscar si el plan ya existe
        const index = companyPlans.findIndex(p => p.id === plan.id)

        //actualizar o insertar
        if (index !== -1) {
            companyPlans[index] = plan
        } else {
            companyPlans.push(plan)
        }

        //guardar nuevamente en el Map. el Map guarda datos por empresa.
        this.plans.set(plan.companyId, companyPlans);
    }

    //Este método busca un plan por su ID.
    async findById(id: string): Promise<Plan | null> {
        //recorrer todas las empresas
        for (const companyPlans of this.plans.values()) {
            //Buscar dentro de cada empresa
            const plan = companyPlans.find(p => p.id === id)
            if (plan) {
                return plan
            }
        }
        //si no lo encuentra devuelve null
        return null
    }

    //Este metodo busca por plan por nombre + empresa
    async findByNameAndCompany(companyId: string, name: string): Promise<Plan | null> {
        //obtiene los planes de la empresa o retorna undefined
        const companyPlans = this.plans.get(companyId) ?? []
        //Aquí se busca dentro del array de planes. ?? Esto transforma: undefined → null
        return companyPlans.find(p => p.name === name) ?? null
    }

    //Este método devuelve todos los planes de una empresa.
    async findByCompany(companyId: string): Promise<Plan[]> {
        return this.plans.get(companyId) ?? []
    }

}