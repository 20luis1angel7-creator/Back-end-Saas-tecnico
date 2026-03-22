export class Plan {
    id;
    name;
    price;
    speed;
    isActive = true;
    createdAt = new Date();
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.price = props.price;
        this.speed = props.speed;
        this.isActive = props.isActive ?? true;
        this.createdAt = props.createdAt ?? new Date();
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
    update(name, price, speed) {
        this.name = name;
        this.price = price;
        this.speed = speed;
    }
}
//# sourceMappingURL=Plan.js.map