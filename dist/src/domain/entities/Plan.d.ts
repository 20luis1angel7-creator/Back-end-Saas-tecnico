type PlanProps = {
    id: string;
    companyId: string;
    name: string;
    price: number;
    speed: number;
    isActive?: boolean;
    createdAt?: Date;
};
export declare class Plan {
    readonly id: string;
    readonly companyId: string;
    name: string;
    price: number;
    speed: number;
    isActive: boolean;
    readonly createdId: Date;
    constructor(props: PlanProps);
    private validate;
    deactivate(): void;
}
export {};
//# sourceMappingURL=Plan.d.ts.map