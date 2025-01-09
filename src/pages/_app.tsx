import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["100", "400", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin-ext", "latin"],
  variable: "--poppins-font",
  display: "swap",
});


const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
};

export default App;
