import { buildServer } from "./api/server";
import "dotenv/config";

const port = Number(process.env.PORT ?? 3000);
const rpcUrl = process.env.EVM_RPC_URL;

if (!rpcUrl) throw new Error("EVM_RPC_URL is missing");

const app = buildServer({rpcUrl});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});