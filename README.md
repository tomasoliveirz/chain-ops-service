# chain-ops-service

Educational, production-style backend service that:
- Connects to an EVM chain via JSON-RPC (ethers)
- Exposes a REST API for health/version and chain status
- (Next) Indexes ERC-20 Transfer events into Postgres with confirmations & reorg tolerance

## Quick start
```bash
npm install
cp .env.example .env
npm run dev
```

## Endpoints
- GET /health
- GET /version
- GET /chain/status

