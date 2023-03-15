import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import { api } from "@/utils/api";

import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["100", "400", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin-ext", "latin"],
  variable: "--poppins-font",
  display: "swap",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main  className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
