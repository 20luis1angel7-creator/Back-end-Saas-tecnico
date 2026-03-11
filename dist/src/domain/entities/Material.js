import { BusinessRuleError } from "../errors/DomainErrors.js";
export class Material {
    id;
    _name;
    _stock;
    _minStock;
    _unitPrice;
    _active;
    constructor(id, _name, _stock, _minStock, _unitPrice, _active = true) {
        this.id = id;
        this._name = _name;
        this._stock = _stock;
        this._minStock = _minStock;
        this._unitPrice = _unitPrice;
        this._active = _active;
        if (!this._name || this._name.trim().length === 0) {
            throw new BusinessRuleError("Material name cannot be empty");
        }
        if (this._stock < 0) {
            throw new BusinessRuleError("Stock cannot be negative");
        }
        if (this._minStock < 0) {
            throw new BusinessRuleError("Minimun stock cannot be negative");
        }
        if (this._unitPrice < 0) {
            throw new BusinessRuleError("Unit price cannot be negative");
        }
    }
    get name() {
        return this._name;
    }
    get stock() {
        return this._stock;
    }
    get minStock() {
        return this._minStock;
    }
    get unitPrice() {
        return this._unitPrice;
    }
    get active() {
        return this._active;
    }
    updateStock(quantity) {
        if (quantity < 0) {
            throw new BusinessRuleError("Quantify cannot be negative");
        }
        this._stock += quantity;
    }
    consume(quantity) {
        if (!this._active) {
            throw new BusinessRuleError("Material is inactive");
        }
        if (quantity <= 0) {
            throw new BusinessRuleError("Quantity must be greater then zero");
        }
        if (quantity > this._stock) {
            throw new BusinessRuleError("Not enough stock available");
        }
        this._stock -= quantity;
    }
    desactive() {
        this._active = false;
    }
}
//# sourceMappingURL=Material.js.map