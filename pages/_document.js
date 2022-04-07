import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="가나다라설명"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:url" content="https://anniversary-chi.vercel.app" />
        <meta property="og:title" content="카카오 제목"></meta>
        <meta property="og:description" content="내용 요약"></meta>
        <meta
          property="og:image"
          content="http://anniversary-chi.vercel.app/images/aws-logo.png"
        ></meta>
        <title>hello</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/**
 * 서버에서만 렌더링 되고 onclick 등 작동하지 않음
 * css도 여기서 사용하지 않음
 */
