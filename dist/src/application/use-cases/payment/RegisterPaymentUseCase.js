import { BusinessRuleError } from "../../../domain/errors/DomainErrors.js";
import { Payment } from "../../../domain/entities/Payment.js";
export class RegisterPaymentUseCase {
    invoiceRepository;
    paymentRepository;
    idGenerator;
    constructor(invoiceRepository, paymentRepository, idGenerator) {
        this.invoiceRepository = invoiceRepository;
        this.paymentRepository = paymentRepository;
        this.idGenerator = idGenerator;
    }
    async execute(request) {
        const { clientId, invoiceId, amount } = request;
        const invoice = await this.invoiceRepository.findById(invoiceId);
        if (!invoice) {
            throw new BusinessRuleError(" Invoice not found");
        }
        if (invoice.clientId !== clientId) {
            throw new BusinessRuleError("Invoice does not belong to this client");
        }
        const payments = await this.paymentRepository.findByInvoiceId(invoiceId);
        const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
        const remainingBalance = invoice.amount - totalPaid;
        if (amount > remainingBalance) {
            throw new BusinessRuleError("Payment exceeds remaining balance");
        }
        const payment = new Payment(this.idGenerator.generate(), clientId, invoiceId, amount, new Date());
        await this.paymentRepository.save(payment);
        if (amount >= remainingBalance) {
            invoice.pay(new Date());
            await this.invoiceRepository.save(invoice);
        }
    }
}
//# sourceMappingURL=RegisterPaymentUseCase.js.map