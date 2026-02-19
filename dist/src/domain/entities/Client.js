import { BusinessRuleError } from "../errors/DomainErrors.js";
export class Client {
    id;
    name;
    nickname;
    cedula;
    address;
    phone;
    planId;
    status;
    routerSerial;
    constructor(id, name, nickname, cedula, address, phone, planId, status = "PENDING_INSTALLATION", routerSerial) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.cedula = cedula;
        this.address = address;
        this.phone = phone;
        this.planId = planId;
        this.status = status;
        this.routerSerial = routerSerial;
        this.validate();
    }
    //si falta algo de esto, no se crea
    validate() {
        if (!this.name)
            throw new BusinessRuleError("Client name is required");
        if (!this.cedula)
            throw new BusinessRuleError("Cedula is required");
        if (!this.planId)
            throw new BusinessRuleError("Client must have a plan");
    }
    activate() {
        if (this.status === "ACTIVE") {
            return;
        }
        if (this.status === "PENDING_INSTALLATION") {
            this.status = "ACTIVE";
            return;
        }
        if (this.status === "WARNING" || this.status === "SUSPENDED") {
            this.status = "ACTIVE";
            return;
        }
        throw new BusinessRuleError("Client cannot be activited from current state");
    }
    markWarning() {
        if (this.status !== "ACTIVE") {
            throw new BusinessRuleError("Only active clients can be marked as WARNING");
        }
        this.status = "WARNING";
    }
    //solo si esta activo se suspende 
    suspend() {
        if (this.status !== "ACTIVE" && this.status !== "WARNING") {
            throw new BusinessRuleError("Client cannot be suspended from current state");
        }
        this.status = "SUSPENDED";
    }
    //valida que el serial no este vacio
    assignRouter(serial) {
        if (!serial)
            throw new BusinessRuleError("Router serial is required");
        this.routerSerial = serial;
    }
    //eliminar
    // delete(){
    //     if(this.status === "ACTIVE") {
    //         throw new BusinessRuleError("Active clients cannot be deleted")
    //     }
    // }
    updateData(name, nickname, address, phone, planId) {
        this.name = name;
        this.nickname = nickname;
        this.address = address;
        this.phone = phone;
        this.planId = planId;
    }
}
//# sourceMappingURL=Client.js.map