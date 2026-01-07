import express from "express";
import {EvmClient} from "../chain/evmClient";
import type { AppConfig } from "../types/config";

export function buildServer(config: AppConfig) {
    const app = express();
    const evm = new EvmClient(config.rpcUrl);

    app.use(express.json());

    app.get("/health", (req, res) => {
        res.send({ok: true});
    });

    app.get("/version", (_req, res) => {
        res.send({name: "chain-ops-service", version: "0.1.0"});
    });


    app.get("/chain/status", async (_req, res) => {
        const latestBlock = await evm.getLatestBlockNumber();
        res.json({ chain: "sepolia", latestBlock});
    });


    return app;
}