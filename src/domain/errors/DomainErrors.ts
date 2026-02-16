//solo errores que hay regla de negocio 
export abstract class DomainError extends Error {//Es abstracta porque no queremos lanzar DomainError directamente.
    constructor(message:string) {
        super(message)
        this.name = this.constructor.name;

        Object.setPrototypeOf(this, new.target.prototype)
    }
}

export class NotFoundError extends DomainError {}

export class BusinessRuleError extends DomainError {}