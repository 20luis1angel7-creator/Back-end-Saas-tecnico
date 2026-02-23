import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
import { PaymentRepository } from "../../../domain/repositories/PaymentRepository.js";
import { IdGenerator } from "../../../infrastructure/services/IdGenerator.js";
import { BusinessRuleError } from "../../../domain/errors/DomainErrors.js";
import { Payment } from "../../../domain/entities/Payment.js";


interface RegisterPaymentRequest {
    clientId:string;
    invoiceId: string;
    amount: number;
}

export class RegisterPaymentUseCase {
    constructor(
        private invoiceRepository: InvoiceRepository,
        private paymentRepository: PaymentRepository,
        private idGenerator: IdGenerator
    ) {}

    async execute(request: RegisterPaymentRequest): Promise<void>{
        const { clientId, invoiceId, amount} = request;

        const invoice = await this.invoiceRepository.findById(invoiceId)

        if (!invoice) {
            throw new BusinessRuleError(" Invoice not found");
        }

        if (invoice.clientId !== clientId) {
            throw new BusinessRuleError("Invoice does not belong to this client");
        }

        const payments = await this.paymentRepository.findByInvoiceId(invoiceId);

        const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0)

        const remainingBalance = invoice.amount - totalPaid;

        if (amount > remainingBalance) {
            throw new BusinessRuleError("Payment exceeds remaining balance");
        }

        const payment = new Payment(
            this.idGenerator.generate(),
            clientId,
            invoiceId,
            amount,
            new Date()
        )

        await this.paymentRepository.save(payment);

        if (amount === remainingBalance) {
            invoice.pay(new Date());
            await this.invoiceRepository.save(invoice)
        }
    }
} 