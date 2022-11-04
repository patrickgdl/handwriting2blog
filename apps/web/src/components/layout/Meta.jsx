import { FAVICON_FOLDER } from "../lib/constants";

export function Meta() {
  return (
    <>
      <title>handwriting2html</title>
      <meta
        name="description"
        content="An open-source handwriting to HTML converter with AI integration."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${FAVICON_FOLDER}/apple-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${FAVICON_FOLDER}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${FAVICON_FOLDER}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${FAVICON_FOLDER}/manifest.json`} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="hacker news, slack, bot" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta itemProp="image" content="https://escrita.com/thumbnail.png" />
      <meta property="og:logo" content="https://escrita.com/logo.png"></meta>
      <meta property="og:image" content="https://escrita.com/thumbnail.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@handwriting2html" />
      <meta name="twitter:creator" content="@opatrickgdl" />
      <meta
        name="twitter:title"
        content="handwriting2html - Open-Source Handwriting to HTML"
      />
      <meta
        name="twitter:description"
        content="An open-source handwriting to HTML converter"
      />
      <meta name="twitter:image" content="https://escrita.com/thumbnail.png" />
    </>
  );
}
