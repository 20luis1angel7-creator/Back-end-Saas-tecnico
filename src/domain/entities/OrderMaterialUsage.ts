import { resourceUsage } from "node:process";
import { BusinessRuleError } from "../errors/DomainErrors.js";

export class OrderMaterialUsage {
    constructor(
        private readonly _ordeId: string,
        private readonly _materialId: string,
        private readonly _quantity: number
    ) {
        if (_quantity <= 0) {
            throw new BusinessRuleError("Quantity must be greater than zero")
        }
    }
    get orderId(): string {
        return this._ordeId;
    }
    get materialId(): string {
        return this._materialId;
    }
    get quantity(): number {
        return this._quantity;
    }
}