import express from "express";
import {EvmClient} from "../chain/evmClient";


export function buildServer() {
    const app = express();

    app.use(express.json());

    app.get("/health", (req, res) => {
        res.send({ok: true});
    });

    app.get("/version", (_req, res) => {
        res.send({name: "chain-ops-service", version: "0.1.0"});
    });

    const rpcUrl = process.env.EVM_RPC_URL;
    if (!rpcUrl) throw new Error("EVM_RPC_URL is missing");

    const evm = new EvmClient(rpcUrl);

    app.get("/chain/status", async (_req, res) => {
        const latestBlock = await evm.getLatestBlockNumber();
        res.json({ chain: "sepolia", latestBlock});
    });


    return app;
}