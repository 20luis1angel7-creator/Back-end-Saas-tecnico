export type OrderStatus = "PENDING" | "IN_PROGRESS" | "CANCELLED" | "COMPLETED";
export declare class Order {
    readonly id: string;
    readonly clientId: string;
    private _status;
    readonly createdAt: Date;
    private _completedAt?;
    constructor(id: string, clientId: string, _status: OrderStatus, createdAt: Date, _completedAt?: Date | undefined);
    get status(): OrderStatus;
    get completed(): Date | undefined;
    start(): void;
    complete(): void;
    cancel(): void;
}
//# sourceMappingURL=Order.d.ts.map