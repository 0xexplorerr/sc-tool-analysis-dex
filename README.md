This repository contains the source code, architectural documentation, and experimental data for a Decentralized Exchange (DEX) application designed as a controlled environment (testbed) for evaluating automated smart contract vulnerability detection tools.

## Project Overview

The core objective of this project was to provide a realistic decentralized application (dApp) architecture where specific security vulnerabilities have been intentionally "injected." These vulnerabilities are mapped to the **Smart Contract Weakness Classification (SWC) Registry** to provide a standardized benchmark for testing static and dynamic analysis tools.

### Key Features:
- **Dual-Version Smart Contracts:** Implementations for both Solidity `0.4.24` and `0.5.8`.
- **End-to-End dApp Architecture:** A functional React-based frontend to demonstrate how smart contract vulnerabilities manifest in user-facing applications.
- **Comprehensive Documentation:** Detailed overview of the dapp architecture and injected vulnerabilities.

## Repository Structure

| Path | Description |
| :--- | :--- |
| `dex-contracts/` | Solidity source code, including vulnerable implementations. |
| `dex-frontend/` | React.js application for frontend-contract integration. |
| `Results.xlsx` | Results of the tools performance. |
| `dex-architecture-overview.pdf` | Detailed technical documentation of the system and injected vulnerabilities. |

## Technical Stack

- **Smart Contracts:** Solidity `0.4.24` and `0.5.8`
- **Development Framework:** Hardhat
- **Frontend:** React.js, Ethers.js
- **Standardization:** SWC Registry (Smart Contract Weakness Classification)

## Security Analysis Context

The contracts located in `dex-contracts/contracts` are specifically designed to include common yet critical security flaws, such as:
- Reentrancy (SWC-107)
- Integer Overflow/Underflow (SWC-101)
- Improper Access Control (SWC-105)
- Unchecked Call Return Values (SWC-104)

These vulnerabilities were used to evaluate the efficacy of industry-leading scanners. Detailed findings are documented in the Excel file.

## Getting Started

### Smart Contracts
1. Navigate to the directory: `cd dex-contracts`
2. Install dependencies: `npm install`
3. Compile the contracts: `npx hardhat compile`

### Frontend Application
1. Navigate to the directory: `cd dex-frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## ⚠️ Disclaimer

**WARNING:** The code in this repository is **intentionally vulnerable**. It is provided strictly for academic research and educational purposes. Do **NOT** use this code in a production environment or as a template for real-world DeFi applications.

---
*Supplementary material for research paper submission.*
