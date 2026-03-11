import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class GetExpenseByIdUseCase {
    expenseRepository;
    constructor(expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    async execute(expenseId) {
        const expense = await this.expenseRepository.findExpenseById(expenseId);
        if (!expense) {
            throw new NotFoundError("Expense not found");
        }
        return expense;
    }
}
//# sourceMappingURL=GetExpenseByIdUseCase.js.map