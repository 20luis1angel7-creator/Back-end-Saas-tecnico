import { InvoiceController } from "../controllers/InvoiceCotroller.js";
import { Router } from "express";

const router = Router()
const controller = new InvoiceController()

// pagar factura
router.post("/invoice/:invoiceId/pay", (req, res) => controller.payInvoice(req, res))
// obtener facturas de un cliente
router.get("/invoice/:clientId", (req, res) => controller.getClientInvoices(req, res))
// obtenet por id de factura
router.get("/invoice/:invoiceId", (req, res) => controller.getInvoiceById(req, res))







export default router