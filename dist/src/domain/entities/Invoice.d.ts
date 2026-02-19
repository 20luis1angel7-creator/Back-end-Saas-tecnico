export type InvoiceStatus = "PENDING" | "PAID" | "OVERDUE";
export declare class Invoice {
    readonly id: string;
    readonly clientId: string;
    readonly issueDate: Date;
    private _dueDate;
    private _status;
    private _paidAt?;
    constructor(id: string, clientId: string, issueDate: Date, _dueDate: Date);
    get status(): InvoiceStatus;
    get dueDate(): Date;
    get paidAt(): Date | undefined;
    pay(paymentDate: Date): void;
    evaluateStatus(today: Date): void;
    extendDueDate(days: number): void;
    setCustomDueDate(newDate: Date): void;
}
//# sourceMappingURL=Invoice.d.ts.map