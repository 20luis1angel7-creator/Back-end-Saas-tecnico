import { Invoice } from "../../../domain/entities/Invoice.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";


export class GetInvoiceByIdUseCase {
    constructor(
        private readonly invoiceRepository: InvoiceRepository
    ) {}
    async execute(invoiceId: string): Promise<Invoice| null> {
        const invoice = await this.invoiceRepository.findById(invoiceId)

        if(!invoice) {
            throw new Error("Invoice not found")
        }

        return invoice
    }
}