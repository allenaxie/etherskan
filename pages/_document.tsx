import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://i.icomoon.io/public/temp/4dd956f873/UntitledProject/style-svg.css" />
        <script defer src="https://i.icomoon.io/public/temp/4dd956f873/UntitledProject/svgxuse.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@alch/alchemy-web3@latest/dist/alchemyWeb3.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}