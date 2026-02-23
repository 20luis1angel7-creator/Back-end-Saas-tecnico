import { Payment } from "../../../domain/entities/Payment.js";
import { PaymentRepository } from "../../../domain/repositories/PaymentRepository.js";




export class InMemoryPaymentRepository implements PaymentRepository {
    private payments: Payment[] = [];

    async save(payment: Payment): Promise<void> {
        this.payments.push(payment);
    }

    async findById(id: string): Promise<Payment | null> {
        const payment = this.payments.find(p => p.id === id);
        return payment ?? null;
    }

    async findByInvoiceId(invoiceId: string): Promise<Payment[]> {
        return this.payments.filter(p => p.invoiceId === invoiceId);
    }
}