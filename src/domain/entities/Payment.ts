import { BusinessRuleError } from "../errors/DomainErrors.js";

export class Payment {
    constructor(
        public readonly id: string,
        public readonly clientId: string,
        public readonly invoiceId: string,
        public readonly amount: number,
        public readonly paymentDate: Date,
        public readonly createdAt: Date = new Date()
    ) {
        if (amount <= 0) {
            throw new BusinessRuleError("Payment amount must be greater than zero")
        }
    }
  
}