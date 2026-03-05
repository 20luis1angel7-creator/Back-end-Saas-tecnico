import { Request, Response } from "express";
import { NotFoundError } from "../../domain/errors/DomainErrors.js";
import { generateMonthlyInvoicesUseCase } from "../../infrastructure/constainer.js";
import { getClientInvoiceUseCase } from "../../infrastructure/constainer.js";

export class InvoiceController {

    async generate(req: Request, res:Response) {
        try {
            const date = new Date()
            const usecase = generateMonthlyInvoicesUseCase;
            await usecase.execute(date)

            
            res.status(200).json({ message: "Invoices generated successfully" })
        } catch (error: any) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ message: error.message })
            }
            return res.status(500).json({ message: error.message })
        }
    }

    async getClientInvoices(req: Request<{clientId: string}>, res: Response) {
        try {
            const usecase = getClientInvoiceUseCase
            const invoice = await usecase.execute(req.params.clientId)
            
            return res.status(200).json(invoice)
        }catch (error:any) {
            return res.status(500).json({ message: error.message })
        }
    }
    
}