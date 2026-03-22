import { ExpenseType } from "../../../domain/entities/Expense.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";
interface ExpenseDTO {
    type: ExpenseType;
    description: string;
    amount: number;
    date: Date;
    createdAt: Date;
}
export declare class CreateExpenseUseCase {
    private readonly expenseRepository;
    constructor(expenseRepository: ExpenseRepository);
    execute(dato: ExpenseDTO): Promise<void>;
}
export {};
//# sourceMappingURL=CreateExpenseUseCase.d.ts.map