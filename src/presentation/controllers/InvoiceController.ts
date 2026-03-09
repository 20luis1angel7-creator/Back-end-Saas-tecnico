import { Request, Response } from "express";
import { NotFoundError } from "../../domain/errors/DomainErrors.js";
import { generateMonthlyInvoicesUseCase, getInvoiceByIdUseCase, invoiceRepository } from "../../infrastructure/container.js";
import { getClientInvoiceUseCase } from "../../infrastructure/container.js";
import { registerInvoicePaymentUseCase } from "../../infrastructure/container.js";
import { updateOverdueInvoiceUseCase } from "../../infrastructure/container.js";

export class InvoiceController {
    //generar factura
    async generate(req: Request, res:Response) {
        try {
            const date = new Date()
            const usecase = generateMonthlyInvoicesUseCase;
            await usecase.execute(date)

            
            return res.status(200).json({ message: "Invoices generated successfully" })
        } catch (error: any) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ message: error.message })
            }
            return res.status(500).json({ message: error.message })
        }
    }
    //obtener 
    async getClientInvoices(req: Request<{clientId: string}>, res: Response) {
        try {
            const usecase = getClientInvoiceUseCase
            const invoice = await usecase.execute(req.params.clientId)

            return res.status(200).json(invoice)
        }catch (error:any) {
            return res.status(500).json({ message: error.message })
        }
    }
    //pagar una factura
    async payInvoice(req: Request<{ invoiceId: string }>, res: Response) {
        try {
            const invoiceId = req.params.invoiceId
            const paymentDate = new Date()

            const usecase = registerInvoicePaymentUseCase
            const result = await usecase.execute(invoiceId, paymentDate)

            return res.status(200).json(result)
        }catch(error: any) {
            return res.status(500).json({ message: error.message})
        }
    }
    //obtener una factura
    async getInvoiceById(req: Request, res: Response) {
        try {
            const invoiceId = req.params.invoiceId as string

            const invoice = await getInvoiceByIdUseCase.execute(invoiceId)

            if (!invoice) {
                return res.status(404).json({ message: "invoiceId not found"})
            }

            return res.status(200).json(invoice)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }
    //marcar facturas vencidas
    async updateOverdueInvoices(req: Request, res: Response) {
        try {
            const date = new Date()

            const invoice = await updateOverdueInvoiceUseCase.execute(date)

            return res.status(200).json(invoice)
        }catch (error:any) {
            return res.status(500).json({ message: error.message })
        }
    }
    
}