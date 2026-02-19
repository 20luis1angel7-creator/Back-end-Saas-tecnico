import { BusinessRuleError } from "../errors/DomainErrors.js";
export class Order {
    id;
    clientId;
    _status;
    createdAt;
    _completedAt;
    constructor(id, clientId, _status, createdAt, _completedAt) {
        this.id = id;
        this.clientId = clientId;
        this._status = _status;
        this.createdAt = createdAt;
        this._completedAt = _completedAt;
    }
    //Permite leer el estado sin permitir modificarlo directamente.
    get status() {
        return this._status;
    }
    //La fecha de finalización O undefined si aún no se completó
    get completed() {
        return this._completedAt;
    }
    //Solo puedes iniciar una orden si está en "PENDING"
    start() {
        if (this._status !== "PENDING") {
            throw new BusinessRuleError("Order can only start from PENDING state");
        }
        this._status = "IN_PROGRESS";
    }
    //Solo puedes completar si está en "IN_PROGRESS"
    complete() {
        if (this._status !== "IN_PROGRESS") {
            throw new BusinessRuleError("Order must be IN_PORGRESS to complete");
        }
        this._status = "COMPLETED";
        this._completedAt = new Date();
    }
    //No puedes cancelar si ya está completada.
    cancel() {
        if (this._status === "COMPLETED") {
            throw new BusinessRuleError("Cannot cancel a completed order");
        }
        if (this._status === "CANCELLED") {
            throw new BusinessRuleError("Order is already cancelled");
        }
        this._status = "CANCELLED";
    }
}
//# sourceMappingURL=Order.js.map