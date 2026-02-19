export type ExpenseType = "EMPLOYEE" | "PROVIDER" | "MATERIAL" | "MAINTENANCE";
export interface ExpenseProps {
    id: string;
    companyId: string;
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
    get amount(): number;
    get type(): ExpenseType;
}
//# sourceMappingURL=Expense.d.ts.map