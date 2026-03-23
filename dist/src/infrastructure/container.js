import { InMemoryClientRepository } from "./database/repositories/InMemoryClientRepository.js";
import { InMemoryMaterialRepository } from "./database/repositories/InMemoryMaterialRepository.js";
import { InMemoryMaterialUsageRepository } from "./database/repositories/InMemoryOrderMaterialUsageRepository.js";
import { InMemoryOrderRepository } from "./database/repositories/InMemoryOrderRepository.js";
import { InMemoryPlanRepository } from "./database/repositories/InMemoryPlanRepository.js";
import { CreatePlanUseCase } from "../application/use-cases/plan/CreatePlanUseCase.js";
import { GetPlanByIdUseCase } from "../application/use-cases/plan/GetPlanByIdUseCase.js";
import { ListPlansUseCase } from "../application/use-cases/plan/ListPlansUseCase.js";
import { DeactivatePlanUseCase } from "../application/use-cases/plan/DeactivatePlanUseCase.js";
import { UpdatePlanUseCase } from "../application/use-cases/plan/UpdatePlanUseCase.js";
import { CreateExpenseUseCase } from "../application/use-cases/expense/CreateExpenseUseCase.js";
import { InMemoryExpenseRepository } from "./database/repositories/InMemoryExpenseRepository.js";
import { ListMaterailsUseCase } from "../application/use-cases/material/ListMaterialsUseCase.js";
import { GetMaterialByIdUseCase } from "../application/use-cases/material/GetMaterialByIdUseCase.js";
import { DeactivateMaterialUseCase } from "../application/use-cases/material/DeactivateMaterialUseCase.js";
import { UpdateMaterialUseCase } from "../application/use-cases/material/UpdateMaterialUseCase.js";
import { CreateMaterialUseCase } from "../application/use-cases/material/CreateMaterialUseCase.js";
import { ListOrdersUseCase } from "../application/use-cases/order/ListOrdersUseCase.js";
import { ListExpensesUseCase } from "../application/use-cases/expense/ListExpensesUseCase.js";
import { GetExpenseByIdUseCase } from "../application/use-cases/expense/GetExpenseByIdUseCase.js";
//singleton manual
export const clientRepository = new InMemoryClientRepository();
export const orderRepository = new InMemoryOrderRepository();
export const materialRepository = new InMemoryMaterialRepository();
export const orderMaterialUsageRepository = new InMemoryMaterialUsageRepository();
export const planRepository = new InMemoryPlanRepository();
export const expenseRepository = new InMemoryExpenseRepository();
// Plan usecase
export const createPlanUseCase = new CreatePlanUseCase(planRepository);
export const getPlanByIdUseCase = new GetPlanByIdUseCase(planRepository);
export const listPlansUseCase = new ListPlansUseCase(planRepository);
export const deactivatePlanUseCase = new DeactivatePlanUseCase(planRepository);
export const updatePlanUseCase = new UpdatePlanUseCase(planRepository);
// Expense PlanController
export const createExpenseUseCase = new CreateExpenseUseCase(expenseRepository);
// order controller
export const listOrdersUseCase = new ListOrdersUseCase(orderRepository);
// expense controller
export const listExpenseUseCase = new ListExpensesUseCase(expenseRepository);
export const getExpenseByIdUseCase = new GetExpenseByIdUseCase(expenseRepository);
export const createMaterialUseCase = new CreateMaterialUseCase(materialRepository);
export const listMaterailsUseCase = new ListMaterailsUseCase(materialRepository);
export const getMaterialByIdUseCase = new GetMaterialByIdUseCase(materialRepository);
export const deactivateMaterialUseCase = new DeactivateMaterialUseCase(materialRepository);
export const updateMaterialUseCase = new UpdateMaterialUseCase(materialRepository);
//# sourceMappingURL=container.js.map