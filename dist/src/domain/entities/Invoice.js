import { BusinessRuleError } from "../errors/DomainErrors.js";
export class Invoice {
    id;
    clientId;
    issueDate;
    _dueDate;
    _status;
    _paidAt;
    constructor(id, clientId, issueDate, _dueDate) {
        this.id = id;
        this.clientId = clientId;
        this.issueDate = issueDate;
        this._dueDate = _dueDate;
        if (_dueDate < issueDate) {
            throw new BusinessRuleError("Due date cannot be before issue date");
        }
        this._status = "PENDING";
    }
    get status() {
        return this._status;
    }
    get dueDate() {
        return this._dueDate;
    }
    get paidAt() {
        return this._paidAt;
    }
    pay(paymentDate) {
        if (this._status === "PAID") {
            throw new BusinessRuleError("Invoice is already paid");
        }
        this._status = "PAID";
        this._paidAt = paymentDate;
    }
    evaluateStatus(today) {
        if (this._status === "PAID") {
            return;
        }
        if (today > this._dueDate) {
            this._status = "OVERDUE";
        }
        else {
            this._status = "PENDING";
        }
    }
    extendDueDate(days) {
        if (this._status === "PAID") {
            throw new BusinessRuleError("Cannont extend due date of a paid invoice");
        }
        if (days <= 0) {
            throw new BusinessRuleError("Days must be greater then zero");
        }
        this._dueDate = new Date(this._dueDate.getTime() + days * 24 * 60 * 60 * 1000);
    }
    setCustomDueDate(newDate) {
        if (this._status === "PAID") {
            throw new BusinessRuleError("Cannot modify due date of a paid invioce");
        }
        if (newDate < this.issueDate) {
            throw new BusinessRuleError("Due date cannot be before issue date");
        }
        this._dueDate = newDate;
    }
}
//# sourceMappingURL=Invoice.js.map