

export type ExpenseType =
| "EMPLOYEE"
| "PROVIDER"
| "MATERIAL"
| "MAINTENANCE";

export interface ExpenseProps {
  id: string,
  companyId: string;
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
      throw new Error("Amount must be greater than zero");
      
    }
  }
  get id() {//modo lectura no se puede modificar
    return this.props.id;
  }

  get amount() {
    return this.props.amount;
  }

  get type() {
    return this.props.type;
  }
}




