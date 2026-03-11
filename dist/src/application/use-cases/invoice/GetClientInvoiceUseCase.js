export class GetClientInvoiceUseCase {
    invoiceRepository;
    constructor(invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }
    async execute(clientId) {
        //recibimos las facturas
        const invoices = await this.invoiceRepository.findByClientId(clientId);
        //retornamos las factura
        return invoices;
    }
}
//# sourceMappingURL=GetClientInvoiceUseCase.js.map