import { Interface, Log, JsonRpcProvider } from "ethers";

const ERC20_ABI = [
    "event Transfer(address indexed from, address indexed to, uint256 value)"
];

export type TransferLog = {
    blockNumber: number;
    txHash: string;
    logIndex: number;
    from: string;
    to: string;
    value: string; // wei units --- raw value
};

export class EvmClient {
    private provider: JsonRpcProvider;
    private iface = new Interface(ERC20_ABI);

    constructor(rpcUrl: string) {
        this.provider = new JsonRpcProvider(rpcUrl);
    }

    async getLatestBlockNumber(): Promise<number> {
        return await this.provider.getBlockNumber();
    }

    async getErc20TransferLogs(params: {
        tokenAddress: string;
        fromBlock: number;
        toBlock: number;
    }): Promise<TransferLog[]> {
        const { tokenAddress, fromBlock, toBlock } = params;

        const logs: Log[] = await this.provider.getLogs({
            address: tokenAddress,
            fromBlock,
            toBlock,
            topics: [this.iface.getEvent("Transfer")!.topicHash],
        });

        return logs.map((log) => {
            const parsed = this.iface.parseLog(log)!;
            const from = String(parsed.args.from);
            const to = String(parsed.args.to);
            const value = parsed.args.value.toString();

            return {
                blockNumber: log.blockNumber,
                txHash: log.transactionHash,
                logIndex: log.index,
                from,
                to,
                value,
            };
        });
    }
}
