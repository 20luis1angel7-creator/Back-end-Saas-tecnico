// import { Expense } from "../../../domain/entities/Expense.js";
// import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
// import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";

// /// no estara en uso


// export class ListExpensesByMonthUseCase{
//     constructor(
//         private readonly expenseRepository: ExpenseRepository
//     ) {}

//     async execute(expenseId: Expense): Promise<Expense[]> {
//         const expense = await this.expenseRepository.findExpenseByMonth(expenseId)

//         if(!expense) {
//             throw new NotFoundError("Expense not found")
//         }

//         return expense
//     }
// }