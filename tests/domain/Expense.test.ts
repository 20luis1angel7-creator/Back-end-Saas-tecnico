import { describe, it, expect } from "vitest"
import { Expense } from "../../src/domain/entities/Expense.js";

describe("Expense entity", () => {
  it("should create a valid expense", () => {
    const expense = new Expense({
      id: "1",
      companyId: "company-1",
      type: "EMPLOYEE",
      description: "Salary payment",
      amount: 1000,
      date: new Date(),
      createdAt: new Date(),
    });
    expect(expense.amount).toBe(1000);
  });

  it("should not allow negative amount", () => {
    expect(() => {
      new Expense({
        id: "1",
        companyId: "company-1",
        type: "EMPLOYEE",
        description: "Invalid expense",
        amount: -50,
        date: new Date(),
        createdAt: new Date(),
      });
    }).toThrow("Amount must be greater than zero");
  });

  it ("should not allow empty description", () => {
    expect(() => {
      new Expense({
        id: "1",
        companyId: "company-1",
        type: "EMPLOYEE",
        description: "",
        amount: 100,
        date: new Date(),
        createdAt: new Date(),
      });
    }).toThrow("Description is required");
  });
});














