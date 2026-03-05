import { InMemoryClientRepository } from "./database/repositories/InMemoryClientRepository.js";
import { InMemoryMaterialRepository } from "./database/repositories/InMemoryMaterialRepository.js";
import { InMemoryMaterialUsageRepository } from "./database/repositories/InMemoryOrderMaterialUsageRepository.js";
import { InMemoryOrderRepository } from "./database/repositories/InMemoryOrderRepository.js";
import { InMemoryPlanRepository } from "./database/repositories/InMemoryPlanRepository.js";
import { GenerateMonthlyInvoicesUseCase } from "../application/use-cases/invoice/GenerateMonthlyinvoicesUseCase.js";
import { InMemoryInvoiceRepository } from "./database/repositories/InMemoryInvoiceRepository.js";
import { UuidGenerator } from "./services/IdGenerator.js";
import { GetClientInvoiceUseCase } from "../application/use-cases/invoice/GetClientInvoiceUseCase.js";

//singleton manual
export const clientRepository = new InMemoryClientRepository();
export const orderRepository = new InMemoryOrderRepository();
export const materialRepository = new InMemoryMaterialRepository();
export const orderMaterialUsageRepository = new InMemoryMaterialUsageRepository();
export const planRepository = new InMemoryPlanRepository();
export const invoiceRepository = new InMemoryInvoiceRepository();
export const idGenerator = new UuidGenerator()

export const generateMonthlyInvoicesUseCase = new GenerateMonthlyInvoicesUseCase(
    planRepository,
    clientRepository,
    invoiceRepository,
    idGenerator
)

export const getClientInvoiceUseCase = new GetClientInvoiceUseCase(invoiceRepository);
            
    
