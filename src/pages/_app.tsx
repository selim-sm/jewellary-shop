import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Layout>
  );
}
