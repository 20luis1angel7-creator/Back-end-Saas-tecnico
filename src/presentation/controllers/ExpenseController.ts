import { Request, Response } from "express";
import { createExpenseUseCase, expenseRepository, materialRepository } from "../../infrastructure/container.js";
import { CreateExpenseUseCase } from "../../application/use-cases/expense/CreateExpenseUseCase.js";
import { GetExpenseByIdUseCase } from "../../application/use-cases/expense/GetExpenseByIdUseCase.js";
import { use } from "react";
import { TestAPI } from "vitest";
import { ListExpensesUseCase } from "../../application/use-cases/expense/ListExpensesUseCase.js";
import { error } from "node:console";
import { RegisterMaterialPurchaseUseCase } from "../../application/use-cases/expense/RegisterMaterialPurchaseUseCase.js";


export class ExpenseController {

    async create(req: Request, res: Response) {
        try {
        const usecase = new CreateExpenseUseCase(expenseRepository)

        const result = await usecase.execute(req.body)

        return res.status(200).json(result)
        } catch(error:any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async getExpenseById(req: Request, res: Response) {
        try{
            const usecase = new GetExpenseByIdUseCase(expenseRepository)

            const result = await usecase.execute(req.body)

            res.status(200).json(result)
        } catch(error: any) {
            res.status(500).json({ message: error.message })
        }
    }

    async listExpense(req: Request, res: Response) {
        try {
            
            const usecase = new ListExpensesUseCase(expenseRepository)

            const result = await usecase.execute()

            return res.status(200).json(result)
        } catch(error: any) {
            return res.status(500).json({ message: error.message })
        }
    }

    async RegisterMaterialPurchase(req: Request, res: Response) {
        try {
            const usecase = new RegisterMaterialPurchaseUseCase(expenseRepository, materialRepository)

            const result = await usecase.execute(req.body.companyId,
                req.body.materialId,
                req.body.quantity,
                req.body.description,
                req.body.date

             )
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }
}