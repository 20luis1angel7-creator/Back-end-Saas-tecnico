import { expenseRepository, materialRepository } from "../../infrastructure/container.js";
import { CreateExpenseUseCase } from "../../application/use-cases/expense/CreateExpenseUseCase.js";
import { GetExpenseByIdUseCase } from "../../application/use-cases/expense/GetExpenseByIdUseCase.js";
import { ListExpensesUseCase } from "../../application/use-cases/expense/ListExpensesUseCase.js";
import { RegisterMaterialPurchaseUseCase } from "../../application/use-cases/expense/RegisterMaterialPurchaseUseCase.js";
import { NotFoundError, BusinessRuleError } from "../../domain/errors/DomainErrors.js";
export class ExpenseController {
    async create(req, res) {
        try {
            const usecase = new CreateExpenseUseCase(expenseRepository);
            const result = await usecase.execute(req.body);
            return res.status(201).json(result);
        }
        catch (error) {
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }
            return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" });
        }
    }
    async getExpenseById(req, res) {
        try {
            const usecase = new GetExpenseByIdUseCase(expenseRepository);
            const result = await usecase.execute(req.params.expenseId);
            return res.status(200).json(result);
        }
        catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message });
            }
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }
            return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" });
        }
    }
    async listExpenses(req, res) {
        try {
            const usecase = new ListExpensesUseCase(expenseRepository);
            const result = await usecase.execute();
            return res.status(200).json(result);
        }
        catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message });
            }
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }
            return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" });
        }
    }
    async registerMaterialPurchase(req, res) {
        try {
            const usecase = new RegisterMaterialPurchaseUseCase(expenseRepository, materialRepository);
            const result = await usecase.execute(req.body.materialId, req.body.quantity, req.body.companyId, req.body.description, req.body.date);
            return res.status(201).json(result);
        }
        catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message });
            }
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }
            return res.status(500).json({ type: "INTERNAL_ERROR", message: "Internal server error" });
        }
    }
}
//# sourceMappingURL=ExpenseController.js.map