import { createPlanUseCase, deactivatePlanUseCase, listPlansUseCase, updatePlanUseCase } from "../../infrastructure/container.js";
import { getPlanByIdUseCase } from "../../infrastructure/container.js";
export class PlanController {
    async create(req, res) {
        try {
            const plan = req.body;
            const result = await createPlanUseCase.execute(plan);
            return res.status(201).json(result);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async getPlanById(req, res) {
        try {
            const plan = req.params.id;
            const result = await getPlanByIdUseCase.execute(plan);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async listPlans(req, res) {
        try {
            const plan = req.params.companyId;
            const result = await listPlansUseCase.execute(plan);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async deactivatePlan(req, res) {
        try {
            const plan = req.body;
            const result = await deactivatePlanUseCase.execute(plan);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async updatePlan(req, res) {
        try {
            const { name, price, speed } = req.body;
            const result = await updatePlanUseCase.execute(req.params.id, name, price, speed);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
//# sourceMappingURL=PlanController.js.map