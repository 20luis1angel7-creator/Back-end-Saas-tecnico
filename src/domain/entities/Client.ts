import { BusinessRuleError } from "../errors/DomainErrors.js";

export type ClientStatus =
| "PENDING_INSTALLATION"
| "ACTIVE"
| "WARNING"
| "SUSPENDED";

export class Client {
    constructor (
        public readonly id: string,
        public name: string,
        public nickname: string,
        public cedula: string,
        public address: string,
        public phone: string,
        public planId: string,
        public status: ClientStatus = "PENDING_INSTALLATION",
        public routerSerial?: string
    ) {
        this.validate();
    }

    //si falta algo de esto, no se crea
    private validate() {
        if (!this.name) throw new BusinessRuleError("Client name is required");
        if (!this.cedula) throw new BusinessRuleError("Cedula is required");
        if (!this.planId) throw new BusinessRuleError("Client must have a plan");
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
        if(this.status !== "ACTIVE") {
            throw new BusinessRuleError("Only active clients can be marked as WARNING")
        }

        this.status = "WARNING"
    }

    //solo si esta activo se suspende 
    suspend() {
        if (this.status !== "ACTIVE" && this.status !== "WARNING") {
            throw new BusinessRuleError("Client cannot be suspended from current state");
        }
        this.status = "SUSPENDED";
    }

    //valida que el serial no este vacio
    assignRouter(serial: string) {
        if (!serial) throw new BusinessRuleError("Router serial is required");
        this.routerSerial = serial;
    }
    // eliminar
    delete(){
        if(this.status === "ACTIVE") {
            throw new BusinessRuleError("Active clients cannot be deleted")
        }
    }

    updateData(
        name: string,
        nickname: string,
        address: string,
        phone: string,
        planId: string
    ) {
        this.name = name;
        this.nickname = nickname;
        this.address = address;
        this.phone = phone;
        this.planId = planId;
    }
}





