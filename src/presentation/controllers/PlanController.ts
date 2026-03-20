import { Request, Response } from "express";
import { createPlanUseCase, deactivatePlanUseCase, expenseRepository, listPlansUseCase, materialRepository, updatePlanUseCase } from "../../infrastructure/container.js";
import { getPlanByIdUseCase } from "../../infrastructure/container.js";
import { NotFoundError, BusinessRuleError } from "../../domain/errors/DomainErrors.js";
import { RegisterMaterialPurchaseUseCase } from "../../application/use-cases/expense/RegisterMaterialPurchaseUseCase.js";

export class PlanController {

    async create(req: Request, res: Response) {
        try {
            const plan = req.body
            const result = await createPlanUseCase.execute(plan)

            return res.status(201).json(result)
        }catch(error:unknown) {
            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async getPlanById(req: Request<{id:string}>, res: Response) {
        try {
        const plan = req.params.id
        const result = await getPlanByIdUseCase.execute(plan)

        return res.status(200).json(result)
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async listPlans(req: Request<{companyId:string}>, res: Response) {
        try {
            const plan = req.params.companyId
            const result = await listPlansUseCase.execute(plan)

            return res.status(200).json(result)
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }
    
    async deactivatePlan(req: Request<{id: string}>, res: Response) {
        try {
            const result = await deactivatePlanUseCase.execute(req.params.id)

            return res.status(200).json(result)
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async updatePlan(req: Request<{id:string}>, res: Response) {
        try {
            const {name, price, speed} = req.body
            const result = await updatePlanUseCase.execute(req.params.id,
                name, price, speed
            )

            return res.status(200).json(result)
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }
}
