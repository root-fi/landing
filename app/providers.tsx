"use client";

import { wagmiConfig } from "@/shared/config/wagmi";
import { sendGTMEvent } from "@next/third-parties/google";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { FC, PropsWithChildren, Suspense } from "react";
import { WagmiProvider, useAccountEffect } from "wagmi";

const ConnectHandler: FC<PropsWithChildren> = ({ children }) => {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("ref");

  //   useAccountEffect({
  //     async onConnect(data) {
  //       let referral_wallet = null;
  //       if (referralCode) {
  //         const response = await Api.user.userControllerGetAddressByRefCode(
  //           referralCode
  //         );
  //         referral_wallet = response.data;
  //       }

  //       sendGTMEvent({
  //         event: "connect_wallet",
  //         chain: data.chain?.name ?? "Unknown", // example. 'Soneium'
  //         walletAddress: `wallet_${data.address.toLowerCase()}`,
  //         referral_wallet: `wallet_${referral_wallet}`,
  //         wallet_provider: data.connector.name,
  //         timestamp: new Date().toISOString(),
  //       });
  //     },
  //   });
  return children;
};

const MaintenanceMiddleware: FC<PropsWithChildren> = ({ children }) => {
  const maintenanceEnabled =
    process.env.NEXT_PUBLIC_MAINTENANCE_ENABLED === "true";

  if (maintenanceEnabled) {
    return <div className="layout">1</div>;
  }

  return <>{children}</>;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

export function Providers({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <WagmiProvider config={wagmiConfig}>
      <Suspense fallback={<></>}>
        <ConnectHandler>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider theme={darkTheme()}>
              <MaintenanceMiddleware>{children}</MaintenanceMiddleware>
            </RainbowKitProvider>
          </QueryClientProvider>
        </ConnectHandler>
      </Suspense>
    </WagmiProvider>
  );
}
