import { FAVICON_FOLDER } from "utils";

export function Meta() {
  const meta = {
    title: "handwriting2blog",
    description:
      "handwriting2blog - Open-Source Handwriting to Blog converter.",
    cardImage: "/thumbnail.png",
    logoImage: "/logo.png",
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      {/* <meta
        property="og:url"
        content={`https://handwriting2blog.vercel.app/${location.pathname}`}
      /> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.cardImage} />
      <meta property="og:logo" content={meta.logoImage}></meta>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@handwriting2blog" />
      <meta name="twitter:creator" content="@opatrickgdl" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.cardImage} />

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
    </>
  );
}
