type PlanProps = {
    id: string;
    companyId: string;
    name: string;
    price: number;
    speed: number;
    isActive?: boolean;
    createdAt?: Date;
};

export class Plan {
    public readonly id: string;
    public readonly companyId: string;
    public name: string;
    public price: number;
    public speed: number;
    public isActive: boolean = true;
    public readonly createdId: Date = new Date();


    constructor(props: PlanProps) {
        this.id = props.id;
        this.companyId = props.companyId;
        this.name = props.name;
        this.price = props.price;
        this.speed = props.speed;
        this.isActive = props.isActive ?? true;
        this.createdId = props.createdAt ?? new Date();

        this.validate();
    }

    private validate() {
        if (!this.name.trim()) {
            throw new Error("Plan name is required");
        }

        if (this.price <= 0 ){
            throw new Error("Plan price must be greater then zero");
        }

        if (this.speed <= 0) {
            throw new Error("Plan speed must be greater than zero");
        }
    }
    deactivate() {
        this.isActive = false;
    }
}