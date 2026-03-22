import { randomUUID } from "node:crypto";
import { Expense } from "../../../domain/entities/Expense.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class CreateExpenseUseCase {
    expenseRepository;
    constructor(expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    async execute(dato) {
        const existigexpense = await this.expenseRepository.findAll();
        if (!existigexpense) {
            throw new NotFoundError("Expense not found");
        }
        const expense = new Expense({
            id: randomUUID(),
            type: dato.type,
            description: dato.description,
            amount: dato.amount,
            date: dato.date,
            createdAt: dato.createdAt
        });
        await this.expenseRepository.save(expense);
    }
}
//# sourceMappingURL=CreateExpenseUseCase.js.map