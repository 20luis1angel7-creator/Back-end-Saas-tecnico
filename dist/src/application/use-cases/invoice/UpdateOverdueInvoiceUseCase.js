export class UpdateOverdueInvoiceUseCase {
    invoiceRepository;
    constructor(invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }
    async execute(today) {
        //buscar facturas pendientes
        const pendinginvoice = await this.invoiceRepository.findByStatus("PENDING");
        //recorrer cada factura
        for (const invoice of pendinginvoice) {
            //evalua el estado
            invoice.evaluateStatus(today);
            //guardar solo si cambio a OVERDUE
            if (invoice.status === "OVERDUE") {
                await this.invoiceRepository.save(invoice);
            }
        }
    }
}
//# sourceMappingURL=UpdateOverdueInvoiceUseCase.js.map