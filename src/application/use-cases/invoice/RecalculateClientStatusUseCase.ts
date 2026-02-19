import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";



export class RecalculateClienStatusUseCase {
    constructor(
        private readonly clientRepository: ClientRepository,
        private readonly invoiceRepository: InvoiceRepository
    ) {}

    async execute(clientId:string): Promise<void> {
        const client = await this.clientRepository.findById(clientId);

        if(!client) {
            throw new NotFoundError("Client not found");
        }

        const overdueInvoices = await this.invoiceRepository.findByClientAndStatus(
            clientId,
            "OVERDUE"
        );

        const count = overdueInvoices.length

        if(count === 0) {
            client.activate()
        }
        if(count === 1) {
            client.markWarning();
        }

        if(count > 2) {
            client.suspend()
        }

        await this.clientRepository.save(client)
    }
}