import { Request, Response } from "express";
import { NotFoundError } from "../../domain/errors/DomainErrors.js";
import { clientRepository, generateMonthlyInvoicesUseCase } from "../../infrastructure/constainer.js";
import { invoiceRepository } from "../../infrastructure/constainer.js";



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

    async seeinvoice(req: Request, res: Response) {
        try {
            const clientId = await invoiceRepository.findByCliendId(req.params.id)
            
        }catch (error:any) {

        }
    }
    
}