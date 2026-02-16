import { exit } from "process";
import { BusinessRuleError } from "../../../domain/errors/DomainErrors.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
import { Invoice } from "../../../domain/entities/Invoice.js";



export class GenerateMonthlyInvoicesUseCase {
    constructor( 
        private readonly clientRepository: ClientRepository,
        private readonly invoiceRepository: InvoiceRepository
    ) {}

    async execute(today: Date): Promise<void> {
        const clients = await this.clientRepository.findAll();

        const month = today.getMonth();
        const year = today.getFullYear();

        for ( const client of clients) {
            if(client.status !== "ACTIVE" && client.status !== "SUSPENDED") {
                continue;
            }

            const existingInvoice = await this.invoiceRepository.findByClientAndMonth(
                client.id,
                month,
                year
            )

            if (!existingInvoice) {
                continue;
            }

            const dueDate = new Date(
                today.getTime() + 30 * 24 * 60 * 60 * 1000
            )

            const invoice = new Invoice(
                generateId(),
                client.id, 
                today,
                dueDate
            )

            await this.invoiceRepository.save(invoice);
        }

    }
}