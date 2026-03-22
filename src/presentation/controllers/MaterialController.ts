import { createMaterialUseCase, expenseRepository, materialRepository } from "../../infrastructure/container.js";
import { Request, Response } from "express";
import { getMaterialByIdUseCase } from "../../infrastructure/container.js";
import { listMaterailsUseCase } from "../../infrastructure/container.js";
import { deactivateMaterialUseCase } from "../../infrastructure/container.js";
import { updateMaterialUseCase } from "../../infrastructure/container.js";
import { BusinessRuleError, NotFoundError } from "../../domain/errors/DomainErrors.js";

export class MaterialController {

    async create(req: Request, res: Response) {
        try{
            const material = req.body
            const result = await createMaterialUseCase.execute(material)

            return res.status(201).json(result)
        }catch(error:unknown) {
            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const material = req.params.id

            const result = await getMaterialByIdUseCase.execute(material)

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

    async listmaterials(req: Request, res: Response) {
        try {
            const result = await listMaterailsUseCase.execute()

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

    async deactivate(req: Request<{id: string}>, res: Response) {
        try {
            const material = req.params.id
            const result = await deactivateMaterialUseCase.execute(material)
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

    async update(req: Request<{id: string}>, res: Response) {
        try {
            const {name,stock, minStock, unitPrice, active} = req.body
            const result = await updateMaterialUseCase.execute(
                req.params.id,name,stock,minStock,unitPrice,active
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