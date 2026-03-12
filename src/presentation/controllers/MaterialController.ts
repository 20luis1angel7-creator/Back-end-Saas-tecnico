import { use } from "react";
import { createMaterialUseCase } from "../../infrastructure/container.js";
import { Request, Response } from "express";
import { getMaterialByIdUseCase } from "../../infrastructure/container.js";
import { listMaterailsUseCase } from "../../infrastructure/container.js";
import { deactivateMaterialUseCase } from "../../infrastructure/container.js";
import { updateMaterialUseCase } from "../../infrastructure/container.js";

export class MaterialController {

    async create(req: Request, res: Response) {
        try{
            const material = req.body
            const result = await createMaterialUseCase.execute(material)


            return res.status(201).json(result)
        }catch(error:any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async GetById(req: Request<{id: string}>, res: Response) {
        try {
        const material = req.params.id

        const result = await getMaterialByIdUseCase.execute(material)

        return res.status(200).json(result)
        } catch(error:any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async listmaterials(req: Request<{companyId: string}>, res: Response) {
        try {
           const material = req.params.companyId
            const result = await listMaterailsUseCase.execute(material)

            return res.status(200).json(result)
        }catch(error:any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async deactivate(req: Request<{name: string}>, res: Response) {
        try {
            const material = req.params.name
            const result = await deactivateMaterialUseCase.execute(material)
            return res.status(200).json(result)
        }catch(error:any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async update(req: Request<{name: string}>, res: Response) {
        try {
            const {name,stock, minStock, unitPrice, active} = req.body
            const result = await updateMaterialUseCase.execute(
                req.params.name,stock,minStock,unitPrice,active
            )
            return res.status(200).json(result)
        }catch(error:any) {
            return res.status(500).json({ message: error.message })
        }
    }
}