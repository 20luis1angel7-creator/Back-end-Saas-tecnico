import { Request, response, Response } from "express";
import { expenseRepository, materialRepository } from "../../infrastructure/container.js";
import { CreateExpenseUseCase } from "../../application/use-cases/expense/CreateExpenseUseCase.js";
import { getExpenseByIdUseCase } from "../../infrastructure/container.js";
import { listExpenseUseCase } from "../../infrastructure/container.js";
import { RegisterMaterialPurchaseUseCase } from "../../application/use-cases/expense/RegisterMaterialPurchaseUseCase.js";
import { NotFoundError, BusinessRuleError } from "../../domain/errors/DomainErrors.js";
import { toExpenseDTO } from "../../domain/entities/Expense.js";
import { DeleteExpenseUseCase } from "../../application/use-cases/expense/DeleteOrderUseCase.js";

export class ExpenseController {

    async create(req: Request, res: Response) {
        try {
            const usecase = new CreateExpenseUseCase(expenseRepository)

            const result = await usecase.execute(req.body)

            return res.status(201).json(toExpenseDTO(result))
        }catch(error:unknown) {
            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async getExpenseById(req: Request<{expenseId: string}>, res: Response) {
        try{
            const expense = await getExpenseByIdUseCase.execute(req.params.expenseId);

            if (!expense) {
               return res.status(404).json({ type: "NOT_FOUND", message: "Expense not found" });
            }
               
            return res.status(200).json(toExpenseDTO(expense));
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

    async listExpenses(req: Request, res: Response) {
        try {
            const result = await listExpenseUseCase.execute();

            return res.status(200).json(result.map(toExpenseDTO))
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

    async registerMaterialPurchase(req: Request, res: Response) {
        try {
            const usecase = new RegisterMaterialPurchaseUseCase(expenseRepository, materialRepository)

            const result = await usecase.execute(
                req.body.materialId,
                Number(req.body.quantity),
                req.body.description,
                new Date(req.body.date)

             )
             return res.status(201).json(toExpenseDTO(result))
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND" ,message: error.message })
            }

            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" })
        }
    }

    async delete(req: Request<{expenseId: string}>, res: Response ) {
        try {
            const usecase = new DeleteExpenseUseCase(expenseRepository)

            await usecase.execute(req.params.expenseId)

            return res.status(204).send()
        } catch (error: unknown) {
        if (error instanceof NotFoundError) {
            return res.status(404).json({ message: error.message })
        }

        return res.status(500).json({ message: "Internal error" })
    }
    }
}