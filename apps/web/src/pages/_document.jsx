import { Html, Head, Main, NextScript } from "next/document";
import { Meta } from "../components/layout";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <Meta />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
