import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
import { RecalculateClienStatusUseCase } from "./RecalculateClientStatusUseCase.js";

export class RegisterInvoicePaymentUseCase {
    constructor( private readonly invoiceRepository: InvoiceRepository,
        private readonly recalculateClienStatusUseCase: RecalculateClienStatusUseCase 
    ) {}
    //Recibe: clientId, paymentDate. Devuelve: Promise<void> (no retorna nada)
    async execute(invoiceId: string, paymentDate: Date): Promise<void> {
        //Buscar la factura
        const invoice = await this.invoiceRepository.findById(invoiceId)
        //Validar existencia
        if (!invoice) {
            throw new Error("Invoice not found");
        }
        //Registrar el pago
        invoice.pay(paymentDate);
        //guardar cambios
        await this.invoiceRepository.save(invoice)
        //recalcular estado del cliente
        await this.recalculateClienStatusUseCase.execute(invoice.clientId)
    }
} 
 