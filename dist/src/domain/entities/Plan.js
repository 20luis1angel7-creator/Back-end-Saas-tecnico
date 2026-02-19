export class Plan {
    id;
    companyId;
    name;
    price;
    speed;
    isActive = true;
    createdId = new Date();
    constructor(props) {
        this.id = props.id;
        this.companyId = props.companyId;
        this.name = props.name;
        this.price = props.price;
        this.speed = props.speed;
        this.isActive = props.isActive ?? true;
        this.createdId = props.createdAt ?? new Date();
        this.validate();
    }
    validate() {
        if (!this.name.trim()) {
            throw new Error("Plan name is required");
        }
        if (this.price <= 0) {
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
//# sourceMappingURL=Plan.js.map