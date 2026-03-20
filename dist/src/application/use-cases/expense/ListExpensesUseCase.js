export class ListExpensesUseCase {
    expenseRepository;
    constructor(expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    async execute() {
        return await this.expenseRepository.findAll();
    }
}
//# sourceMappingURL=ListExpensesUseCase.js.map