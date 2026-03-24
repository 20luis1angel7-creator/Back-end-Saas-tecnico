import { BusinessRuleError } from "../errors/DomainErrors.js";


export type ExpenseType =
| "EMPLOYEE"
| "PROVIDER"
| "MATERIAL"
| "MAINTENANCE";


export function toExpenseDTO(expense: Expense) {
    return {
        id: expense.id,
        type: expense.type,
        description: expense.description,
        amount: expense.amount,
        date: expense.date,
        createdAt: expense.createdAt
    }
}

export interface ExpenseProps {
  id: string,
  type: ExpenseType;
  description: string;
  amount: number;
  date: Date;
  createdAt: Date;
}

export class Expense {
  private props: ExpenseProps;

  constructor(props: ExpenseProps){
    this.validate(props);
    this.props =props;
  }

  private validate(props: ExpenseProps) {
    if(!props.description || props.description.trim().length === 0) {
      throw new Error("Description is required");
    }

    if (props.amount <= 0) {
      throw new BusinessRuleError("Amount must be greater than zero");
      
    }
  }
  get id() {//modo lectura no se puede modificar
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

  update(
  description: string,
  amount: number,
  date: Date,
): void {
  if (!description || description.trim().length === 0) {
    throw new BusinessRuleError("Description is required");
  }

  if (amount <= 0) {
    throw new BusinessRuleError("Amount must be greater than zero");
  }

  this.props.description = description;
  this.props.amount = amount;
  this.props.date = date;
}
}




