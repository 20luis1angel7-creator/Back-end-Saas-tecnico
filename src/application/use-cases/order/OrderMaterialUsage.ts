import { BusinessRuleError } from "../../../domain/errors/DomainErrors.js";


export class OrderMaterialUsage {
    constructor(
        private readonly orderId: string,
        private readonly meaterialId: string,
        private readonly quantity: number
    ) {
        if (quantity <= 0 ){ 
            throw new BusinessRuleError("Quantity must be greater than zero")
        }
    }
}