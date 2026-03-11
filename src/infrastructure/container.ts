import { InMemoryClientRepository } from "./database/repositories/InMemoryClientRepository.js";
import { InMemoryMaterialRepository } from "./database/repositories/InMemoryMaterialRepository.js";
import { InMemoryMaterialUsageRepository } from "./database/repositories/InMemoryOrderMaterialUsageRepository.js";
import { InMemoryOrderRepository } from "./database/repositories/InMemoryOrderRepository.js";
import { InMemoryPlanRepository } from "./database/repositories/InMemoryPlanRepository.js";
import { GenerateMonthlyInvoicesUseCase } from "../application/use-cases/invoice/GenerateMonthlyinvoicesUseCase.js";
import { InMemoryInvoiceRepository } from "./database/repositories/InMemoryInvoiceRepository.js";
import { UuidGenerator } from "./services/IdGenerator.js";
import { GetClientInvoiceUseCase } from "../application/use-cases/invoice/GetClientInvoiceUseCase.js";
import { RegisterInvoicePaymentUseCase } from "../application/use-cases/invoice/RegisterInvoicePaymentUseCase.js";
import { RecalculateClienStatusUseCase } from "../application/use-cases/invoice/RecalculateClientStatusUseCase.js";
import { UpdateOverdueInvoiceUseCase } from "../application/use-cases/invoice/UpdateOverdueInvoiceUseCase.js";
import { GetInvoiceByIdUseCase } from "../application/use-cases/invoice/GetInvoiceByIdUseCase.js";
import { InMemoryPaymentRepository } from "./database/repositories/InMemoryPaymentRepository.js";
import { RegisterPaymentUseCase } from "../application/use-cases/payment/RegisterPaymentUseCase.js";
import { GetPaymentByInvoiceUseCase } from "../application/use-cases/payment/GetPaymentByInvoiceUseCase.js";
import { CreatePlanUseCase } from "../application/use-cases/plan/CreatePlanUseCase.js";
import { GetPlanByIdUseCase } from "../application/use-cases/plan/GetPlanByIdUseCase.js";
import { ListPlansUseCase } from "../application/use-cases/plan/ListPlansUseCase.js";
import { DeactivatePlanUseCase } from "../application/use-cases/plan/DeactivatePlanUseCase.js";
import { UpdatePlanUseCase } from "../application/use-cases/plan/UpdatePlanUseCase.js";
import { CreateExpenseUseCase } from "../application/use-cases/expense/CreateExpenseUseCase.js";
import { InMemoryExpenseRepository } from "./database/repositories/InMemoryExpenseRepository.js";


//singleton manual
export const clientRepository = new InMemoryClientRepository();
export const orderRepository = new InMemoryOrderRepository();
export const materialRepository = new InMemoryMaterialRepository();
export const orderMaterialUsageRepository = new InMemoryMaterialUsageRepository();
export const planRepository = new InMemoryPlanRepository();
export const invoiceRepository = new InMemoryInvoiceRepository();
export const idGenerator = new UuidGenerator()
export const expenseRepository = new InMemoryExpenseRepository()


export const generateMonthlyInvoicesUseCase = new GenerateMonthlyInvoicesUseCase(
    planRepository,
    clientRepository,
    invoiceRepository,
    idGenerator
)

export const getClientInvoiceUseCase = new GetClientInvoiceUseCase(invoiceRepository);

export const recalculateClienStatusUseCase = new RecalculateClienStatusUseCase(
    clientRepository,
    invoiceRepository
)
export const registerInvoicePaymentUseCase = new RegisterInvoicePaymentUseCase(
    invoiceRepository,
    recalculateClienStatusUseCase
)
export const updateOverdueInvoiceUseCase = new UpdateOverdueInvoiceUseCase(invoiceRepository)
export const getInvoiceByIdUseCase = new GetInvoiceByIdUseCase(invoiceRepository)
export const paymentRepository = new InMemoryPaymentRepository()
export const registerPaymentUseCase = new RegisterPaymentUseCase(
    invoiceRepository,
    paymentRepository,
    idGenerator
)
export const getPaymentByInvoiceUseCase = new GetPaymentByInvoiceUseCase(paymentRepository)

// Plan usecase
export const createPlanUseCase = new CreatePlanUseCase(planRepository)
export const getPlanByIdUseCase = new GetPlanByIdUseCase(planRepository)
export const listPlansUseCase = new ListPlansUseCase(planRepository)
export const deactivatePlanUseCase = new DeactivatePlanUseCase(planRepository)
export const updatePlanUseCase = new UpdatePlanUseCase(planRepository)

// Expense PlanController
export const createExpenseUseCase = new CreateExpenseUseCase(expenseRepository)



















