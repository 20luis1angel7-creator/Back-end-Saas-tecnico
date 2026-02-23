import { BusinessRuleError } from "../errors/DomainErrors.js";

export type InvoiceStatus =
| "PENDING"
| "PAID"
| "OVERDUE";

export class Invoice {
    private _status: InvoiceStatus;
    private _paidAt?: Date;

    constructor(
        public readonly id: string,
        public readonly clientId: string,
        public readonly amount: number,
        public readonly issueDate: Date,
        private _dueDate: Date,
        
    ) { 
        if(_dueDate < issueDate) {
            throw new BusinessRuleError("Due date cannot be before issue date");
        }
        this._status = "PENDING"
    }

    get status():InvoiceStatus{
        return this._status;
    }
    get dueDate(): Date {
        return this._dueDate;
    }
    get paidAt(): Date | undefined {
        return this._paidAt;
    }

    pay(paymentDate: Date) {
        if(this._status === "PAID") {
            throw new BusinessRuleError("Invoice is already paid");
        }

        this._status = "PAID";
        this._paidAt = paymentDate;
    }

    evaluateStatus(today: Date) {
        if (this._status === "PAID") {
            return;
        }
        if(today > this._dueDate) {
            this._status = "OVERDUE"
        }else {
            this._status = "PENDING"
        }
    }

    extendDueDate(days: number) {
        if(this._status === "PAID") {
            throw new BusinessRuleError("Cannont extend due date of a paid invoice")
        }
        if (days <= 0) {
            throw new BusinessRuleError("Days must be greater then zero")
        }

        this._dueDate = new Date(this._dueDate.getTime() + days * 24 * 60 *60 * 1000)
    }

    setCustomDueDate(newDate: Date) {
        if (this._status === "PAID") {
            throw new BusinessRuleError("Cannot modify due date of a paid invioce")
        }

        if (newDate < this.issueDate) {
            throw new BusinessRuleError("Due date cannot be before issue date");
        }

        this._dueDate = newDate
    }
}