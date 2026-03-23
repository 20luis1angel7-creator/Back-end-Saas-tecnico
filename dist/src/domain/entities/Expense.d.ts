export type ExpenseType = "EMPLOYEE" | "PROVIDER" | "MATERIAL" | "MAINTENANCE";
export declare function toExpenseDTO(expense: Expense): {
    id: string;
    type: ExpenseType;
    description: string;
    amount: number;
    date: Date;
    createdAt: Date;
};
export interface ExpenseProps {
    id: string;
    type: ExpenseType;
    description: string;
    amount: number;
    date: Date;
    createdAt: Date;
}
export declare class Expense {
    private props;
    constructor(props: ExpenseProps);
    private validate;
    get id(): string;
    get type(): ExpenseType;
    get description(): string;
    get amount(): number;
    get date(): Date;
    get createdAt(): Date;
}
//# sourceMappingURL=Expense.d.ts.map