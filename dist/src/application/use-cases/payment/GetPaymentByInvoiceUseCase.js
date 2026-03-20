export class GetPaymentByInvoiceUseCase {
    paymentRepository;
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    async execute(invoiceId) {
        const payments = await this.paymentRepository.findByInvoiceId(invoiceId);
        return payments;
    }
}
//# sourceMappingURL=GetPaymentByInvoiceUseCase.js.map