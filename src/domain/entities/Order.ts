
export type OrderStatus =
| "PENDING"
| "IN_PROGRESS"
| "CANCELLED"
| "COMPLETED";

export class Order {
    constructor(
        public readonly id: string,
        public readonly clientId: string,
        private _status: OrderStatus,
        public readonly createdAt: Date,
        private _completedAt?: Date
    ) {}

    //Permite leer el estado sin permitir modificarlo directamente.
    get status(): OrderStatus{
        return this._status;
    }

    //La fecha de finalización O undefined si aún no se completó
    get completed(): Date | undefined{
        return this._completedAt;
    }

    //Solo puedes iniciar una orden si está en "PENDING"
    start() {
        if(this._status !== "PENDING") {
            throw new Error("Order can only start from PENDING state")
        }
        this._status = "IN_PROGRESS";
    }

    //Solo puedes completar si está en "IN_PROGRESS"
    complete() {
        if(this._status !== "IN_PROGRESS"){
            throw new Error("Order must be IN_PORGRESS to complete")
        }
        this._status = "COMPLETED";
        this._completedAt = new Date();
    }

    //No puedes cancelar si ya está completada.
    cancel() {
        if(this._status === "COMPLETED"){
            throw new Error("Cannot cancel a completed order");
        }

        if (this._status === "CANCELLED"){
            throw new Error("Order is already cancelled")
        }
        this._status = "CANCELLED";
    }
}
