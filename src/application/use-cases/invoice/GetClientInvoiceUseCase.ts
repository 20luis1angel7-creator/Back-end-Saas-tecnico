import { Invoice } from "../../../domain/entities/Invoice.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";



export class GetClientInvoiceUseCase {
    constructor(
        private readonly invoiceRepository: InvoiceRepository
    ) {}

    async execute(clientId: string): Promise<Invoice[]> {
        //recibimos las facturas
        const invoices = await this.invoiceRepository.findByClientId(clientId)
        //retornamos las factura
        return invoices
    }
}