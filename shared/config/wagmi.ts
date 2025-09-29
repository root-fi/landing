import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  bitgetWallet,
  coin98Wallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  metaMaskWallet,
  okxWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  trustWallet,
  uniswapWallet,
  walletConnectWallet,
  zerionWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { base } from "wagmi/chains";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        walletConnectWallet,
        injectedWallet,
        coinbaseWallet,
      ],
    },
    {
      groupName: "Other",
      wallets: [
        trustWallet,
        rainbowWallet,
        bitgetWallet,
        okxWallet,
        argentWallet,
        coin98Wallet,
        phantomWallet,
        rabbyWallet,
        uniswapWallet,
        zerionWallet,
        imTokenWallet,
      ],
    },
  ],
  {
    appName: "root.fi",
    appDescription: "root.fi",
    appUrl: "https://rootfi.org",
    appIcon: "/favicon.ico",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!,
  }
);

export const wagmiConfig = createConfig({
  chains: [base],
  ssr: true,
  connectors,
  cacheTime: 10000,
  storage: createStorage({
    storage: cookieStorage,
  }),

  transports: {
    [base.id]: http(),
  },
});
