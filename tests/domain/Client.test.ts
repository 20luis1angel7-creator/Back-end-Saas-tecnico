import { describe, it, expect } from "vitest";
import { Client } from "../../src/domain/entities/Client.js";

describe("Client", () => {
    it("should create a valid client", () => {
        const client = new Client(
            "1",
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8091234567",
            "plan-basic"
        );
        expect(client.name).toBe("Luis");
        expect(client.status).toBe("PENDING_INSTALLATION");
    });

    it("shoud activate client", () => {
        const client = new Client(
            "1",
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8091234567",
            "plan-basic"
        );
        client.activate();
        expect(client.status).toBe("ACTIVE");
    });

    it("should throw if activating twice", () => {
        const client = new Client(
             "1",
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8090000000",
            "plan-basic"
        );
        client.activate();

        expect(() => client.activate()).toThrow();
    });
});


