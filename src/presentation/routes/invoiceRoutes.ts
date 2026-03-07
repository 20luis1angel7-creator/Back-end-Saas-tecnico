import { InvoiceController } from "../controllers/InvoiceController.js";
import { Router } from "express";

const router = Router()
const controller = new InvoiceController()

// pagar factura
router.post("/invoice/:invoiceId/pay", (req, res) => controller.payInvoice(req, res))
// obtener facturas de un cliente
router.get("/clients/:clientId/invoices", (req, res) => controller.getClientInvoices(req, res))
// obtenet por id de factura
router.get("/invoice/:invoiceId", (req, res) => controller.getInvoiceById(req, res))
// generar factura
router.post("/invoice/generate", (req, res) => controller.generate(req, res))
// modificar factura
router.patch("/invoice/overdue", (req, res) => controller.updateOverdueInvoices(req, res))






export default router