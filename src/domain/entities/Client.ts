export type ClientStatus =
| "PENDING_INSTALLATION"
| "ACTIVE"
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
        if (!this.name) throw new Error("Client name is required");
        if (!this.cedula) throw new Error("Cedula is required");
        if (!this.planId) throw new Error("Client must have a plan");
    }

    
    activate() {
        if (this.status !== "PENDING_INSTALLATION") {
            throw new Error("Client cannot be activited from current state");
        }
        this.status = "ACTIVE";
    }

    //solo si esta activo se suspende 
    suspend() {
        if (this.status !== "ACTIVE") {
            throw new Error("Only active clients can be suspended");
        }
        this.status = "SUSPENDED";
    }

    //valida que el serial no este vacio
    assignRouter(serial: string) {
        if (!serial) throw new Error("Router serial is required");
        this.routerSerial = serial;
    }
    //eliminar
    delete(){
        if(this.status === "ACTIVE") {
            throw new Error("Active clients cannot be deleted")
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





