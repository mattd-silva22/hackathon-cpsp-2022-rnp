import type { AppProps } from "next/app";
import { UserContextProvider } from "../src/components/context/UserContext";
import AppProvider from "../src/hooks/AppProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>

    </AppProvider>
  );
}
