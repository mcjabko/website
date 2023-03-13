import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Poppins, Roboto } from "@next/font/google";
import { api } from "@/utils/api";

import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["100", "400", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin-ext", "latin"],
  variable: '--poppins-font',
  display: 'swap'
});

export const roboto = Roboto({
  style: [ "normal", "italic" ],
  weight: [ "400", "500" ],
  subsets: [ "latin" ],
  variable: '--roboto-font',
  fallback: [ "Arial" ]
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
