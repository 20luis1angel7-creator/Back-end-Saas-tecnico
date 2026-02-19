import { randomUUID } from "node:crypto";
import { IdGenerator } from "./IdGenerator.js";

export class UuidGenerator implements IdGenerator {
    generate(): string {
        return randomUUID();
    }
}
