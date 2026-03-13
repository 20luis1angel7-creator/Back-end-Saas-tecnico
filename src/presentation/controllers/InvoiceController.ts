import { Request, Response } from "express";
import { NotFoundError, BusinessRuleError } from "../../domain/errors/DomainErrors.js";
import { expenseRepository, generateMonthlyInvoicesUseCase, getInvoiceByIdUseCase, invoiceRepository, materialRepository } from "../../infrastructure/container.js";
import { getClientInvoiceUseCase } from "../../infrastructure/container.js";
import { registerInvoicePaymentUseCase } from "../../infrastructure/container.js";
import { updateOverdueInvoiceUseCase } from "../../infrastructure/container.js";
import { RegisterMaterialPurchaseUseCase } from "../../application/use-cases/expense/RegisterMaterialPurchaseUseCase.js";

export class InvoiceController {
    //generar factura
    async generate(req: Request, res:Response) {
        try {
            const date = new Date()
            const usecase = generateMonthlyInvoicesUseCase;
            await usecase.execute(date)

            
            return res.status(200).json({ message: "Invoices generated successfully" })
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }
            
            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }
            
            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }
    //obtener 
    async getClientInvoices(req: Request<{clientId: string}>, res: Response) {
        try {
            const usecase = getClientInvoiceUseCase
            const invoice = await usecase.execute(req.params.clientId)

            return res.status(200).json(invoice)
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }
            
            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }
            
            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
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
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }
            
            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }
            
            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }
    //obtener una factura
    async getInvoiceById(req: Request, res: Response) {
        try {
            const invoiceId = req.params.invoiceId as string

            const invoice = await getInvoiceByIdUseCase.execute(invoiceId)

            return res.status(200).json(invoice)
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }
        
            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }
            
            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }
    //marcar facturas vencidas
    async updateOverdueInvoices(req: Request, res: Response) {
        try {
            const date = new Date()

            const invoice = await updateOverdueInvoiceUseCase.execute(date)

            return res.status(200).json(invoice)
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }
    
}