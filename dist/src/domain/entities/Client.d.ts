export type ClientStatus = "PENDING_INSTALLATION" | "ACTIVE" | "WARNING" | "SUSPENDED";
export declare class Client {
    readonly id: string;
    name: string;
    nickname: string;
    cedula: string;
    address: string;
    phone: string;
    planId: string;
    status: ClientStatus;
    routerSerial?: string | undefined;
    constructor(id: string, name: string, nickname: string, cedula: string, address: string, phone: string, planId: string, status?: ClientStatus, routerSerial?: string | undefined);
    private validate;
    activate(): void;
    markWarning(): void;
    suspend(): void;
    assignRouter(serial: string): void;
    updateData(name: string, nickname: string, address: string, phone: string, planId: string): void;
}
//# sourceMappingURL=Client.d.ts.map