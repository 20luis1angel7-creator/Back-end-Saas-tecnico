import { Payment } from "../../../domain/entities/Payment.js";
import { PaymentRepository } from "../../../domain/repositories/PaymentRepository.js";





export class GetPaymentByInvoiceUseCase {
    constructor (
        private readonly paymentRepository: PaymentRepository
    ) {}

    async execute(invoiceId: string): Promise<Payment[]> {
        const payments = await this.paymentRepository.findByInvoiceId(invoiceId)


        return payments
    }
}