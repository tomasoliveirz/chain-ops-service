import {JsonRpcProvider} from "ethers";

export class EvmClient {
    private provider: JsonRpcProvider;

    constructor(rpcUrl: string)
    {
        this.provider = new JsonRpcProvider(rpcUrl);
    }

    async getLatestBlockNumber(): Promise <number> {
        return await this.provider.getBlockNumber();
    }
}