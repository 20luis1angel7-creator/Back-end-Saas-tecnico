import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";


export class UpdateOverdueInvoiceUseCase {
    constructor(private readonly invoiceRepository: InvoiceRepository

    ) {}

    async execute(today: Date): Promise<void> {
        //buscar facturas pendientes
        const pendinginvoice = await this.invoiceRepository.findByStatus("PENDING");
        //recorrer cada factura
        for (const invoice of pendinginvoice) {
            //evalua el estado
            invoice.evaluateStatus(today)
            //guardar solo si cambio a OVERDUE
            if (invoice.status === "OVERDUE") {
                await this.invoiceRepository.save(invoice)
            }
        }
    }
}