import { defineChain } from 'viem';
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';
import { contractAbi, contractAddress } from './consts';

const projectId = '748ac61b4e0d5360d734913bc0d973b3';

export const localhost = defineChain({
  id: 31337,
  name: 'Localhost',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://localhost:8545'] },
  },
});

export const config = createConfig({
  chains: [mainnet, sepolia, localhost],
  connectors: [walletConnect({ projectId })],
  transports: {
    [localhost.id]: http('http://localhost:8545'),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export const wagmiContractConfig = {
  address: contractAddress,
  abi: contractAbi,
} as const;

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
