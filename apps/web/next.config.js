/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["ui"]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: [
      "sketch2codeappda298.blob.core.windows.net",
      "images.unsplash.com",
    ],
  },
});
