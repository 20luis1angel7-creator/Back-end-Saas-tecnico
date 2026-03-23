import { randomUUID } from "node:crypto";
import { Expense } from "../../../domain/entities/Expense.js";
export class CreateExpenseUseCase {
    expenseRepository;
    constructor(expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    async execute(dato) {
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