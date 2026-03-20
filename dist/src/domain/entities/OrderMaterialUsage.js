import { BusinessRuleError } from "../errors/DomainErrors.js";
export class OrderMaterialUsage {
    _ordeId;
    _materialId;
    _quantity;
    constructor(_ordeId, _materialId, _quantity) {
        this._ordeId = _ordeId;
        this._materialId = _materialId;
        this._quantity = _quantity;
        if (_quantity <= 0) {
            throw new BusinessRuleError("Quantity must be greater than zero");
        }
    }
    get orderId() {
        return this._ordeId;
    }
    get materialId() {
        return this._materialId;
    }
    get quantity() {
        return this._quantity;
    }
}
//# sourceMappingURL=OrderMaterialUsage.js.map