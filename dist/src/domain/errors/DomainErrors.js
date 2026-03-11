//solo errores que hay regla de negocio 
export class DomainError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
export class NotFoundError extends DomainError {
}
export class BusinessRuleError extends DomainError {
}
//# sourceMappingURL=DomainErrors.js.map