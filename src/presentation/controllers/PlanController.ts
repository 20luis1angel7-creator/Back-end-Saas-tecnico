import { Request, Response } from "express";
import { createPlanUseCase, deactivatePlanUseCase, listPlansUseCase, updatePlanUseCase } from "../../infrastructure/container.js";
import { getPlanByIdUseCase } from "../../infrastructure/container.js";

export class PlanController {

    async create(req: Request, res: Response) {
        try {
            const plan = req.body
            const result = await createPlanUseCase.execute(plan)

            return res.status(201).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async getPlanById(req: Request<{id:string}>, res: Response) {
        try {
        const plan = req.params.id
        const result = await getPlanByIdUseCase.execute(plan)

        return res.status(200).json(result)
        } catch(error:any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async listPlans(req: Request<{companyId:string}>, res: Response) {
        try {
            const plan = req.params.companyId
            const result = await listPlansUseCase.execute(plan)

            return res.status(200).json(result)
        }catch(error: any){
            return res.status(500).json({ message: error.message })
        }
    }

    async deactivatePlan(req: Request, res: Response) {
        try {
            const plan = req.body
            const result = await deactivatePlanUseCase.execute(plan)

            return res.status(200).json(result)
        }catch(error:any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async updatePlan(req: Request<{id:string}>, res: Response) {
        try {
        const {name, price, speed} = req.body
        const result = await updatePlanUseCase.execute(req.params.id,
            name, price, speed
        )

        return res.status(200).json(result)
        }catch(error:any) {
            return res.status(500).json({ message: error.message })
        }

        
    }
}