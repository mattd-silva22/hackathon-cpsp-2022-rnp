import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider from "../src/hooks/AppProvider";
import { GlobalStyled } from "../src/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyled/>
      <Component {...pageProps} />
    </AppProvider>
  );
}
