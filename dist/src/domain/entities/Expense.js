export function toExpenseDTO(expense) {
    return {
        id: expense.id,
        type: expense.type,
        description: expense.description,
        amount: expense.amount,
        date: expense.date,
        createdAt: expense.createdAt
    };
}
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
    get type() {
        return this.props.type;
    }
    get description() {
        return this.props.description;
    }
    get amount() {
        return this.props.amount;
    }
    get date() {
        return this.props.date;
    }
    get createdAt() {
        return this.props.createdAt;
    }
}
//# sourceMappingURL=Expense.js.map