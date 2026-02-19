import { describe, it, expect } from "vitest";
import { Plan } from "../../src/domain/entities/Plan.js";
describe("Plan", () => {
    function createValidPlan(overrides = {}) {
        return new Plan({
            id: "1",
            companyId: "mycompany01",
            name: "Basic Plan",
            price: 1000,
            speed: 20,
            createdAt: new Date(),
            ...overrides //operador ...: copia las propiedades de overrides. sobrescribe las que ya existían
        });
    }
    it("should create a valid plan", () => {
        const plan = createValidPlan();
        expect(plan.name).toBe("Basic Plan");
        expect(plan.price).toBe(1000);
        expect(plan.speed).toBe(20);
        expect(plan.isActive).toBe(true);
    });
    it("should throw if name is empty", () => {
        expect(() => {
            createValidPlan({ name: "" });
        }).toThrow("Plan name is required");
    });
    it("should throw if prace is less then or equal to zero", () => {
        expect(() => {
            createValidPlan({ price: 0 });
        }).toThrow("Plan price must be greater then zero");
    });
    it("should throw if speed is less than or equal to zero", () => {
        expect(() => {
            createValidPlan({ speed: 0 });
        }).toThrow("Plan speed must be greater than zero");
    });
    it("should deactivate plan", () => {
        const plan = createValidPlan();
        plan.deactivate();
        expect(plan.isActive).toBe(false);
    });
});
//# sourceMappingURL=Plan.test.js.map