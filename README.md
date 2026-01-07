# chain-ops-service

Educational, production-style backend service that connects to an EVM chain via JSON-RPC and exposes a REST API for chain operations.

## Features

- Connects to an EVM chain via JSON-RPC (ethers.js)
- Exposes REST API endpoints for service health and chain status
- Fetches ERC-20 Transfer events

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev
```

## Endpoints

### `GET /health`
Checks if the service is running.

### `GET /version`
Returns the current version of the service.

### `GET /chain/status`
Returns the latest block number of the configured chain.

### `GET /chain/transfers`
Fetches ERC-20 transfer logs for a specific token and block range.

**Query Parameters:**
- `token`: The ERC-20 token contract address.
- `fromBlock`: The start block number.
- `toBlock`: The end block number.

**Example Request:**

```bash
curl "http://localhost:3000/chain/transfers?token=0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984&fromBlock=5000000&toBlock=5000010"
```
