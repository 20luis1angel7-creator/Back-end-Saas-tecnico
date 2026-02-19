export class RegisterInvoicePaymentUseCase {
    invoiceRepository;
    recalculateClienStatusUseCase;
    constructor(invoiceRepository, recalculateClienStatusUseCase) {
        this.invoiceRepository = invoiceRepository;
        this.recalculateClienStatusUseCase = recalculateClienStatusUseCase;
    }
    //Recibe: clientId, paymentDate. Devuelve: Promise<void> (no retorna nada)
    async execute(invoiceId, paymentDate) {
        //Buscar la factura
        const invoice = await this.invoiceRepository.findById(invoiceId);
        //Validar existencia
        if (!invoice) {
            throw new Error("Invoice not found");
        }
        //Registrar el pago
        invoice.pay(paymentDate);
        //guardar cambios
        await this.invoiceRepository.save(invoice);
        //recalcular estado del cliente
        await this.recalculateClienStatusUseCase.execute(invoice.clientId);
    }
}
//# sourceMappingURL=RegisterInvoicePaymentUseCase.js.map