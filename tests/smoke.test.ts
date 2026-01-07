import { buildServer } from "../src/api/server";

test("server builds", () => {
    const app = buildServer({rpcUrl: "http://localhost:8545"});
    expect(app).toBeDefined();
})