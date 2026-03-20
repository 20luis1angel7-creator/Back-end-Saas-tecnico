import { BusinessRuleError } from "../errors/DomainErrors.js";
export class Payment {
    id;
    clientId;
    invoiceId;
    amount;
    paymentDate;
    createdAt;
    constructor(id, clientId, invoiceId, amount, paymentDate, createdAt = new Date()) {
        this.id = id;
        this.clientId = clientId;
        this.invoiceId = invoiceId;
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.createdAt = createdAt;
        if (amount <= 0) {
            throw new BusinessRuleError("Payment amount must be greater than zero");
        }
    }
}
//# sourceMappingURL=Payment.js.map