export class Expense {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.description || props.description.trim().length === 0) {
            throw new Error("Description is required");
        }
        if (props.amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
    }
    get id() {
        return this.props.id;
    }
    get amount() {
        return this.props.amount;
    }
    get type() {
        return this.props.type;
    }
}
//# sourceMappingURL=Expense.js.map