/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  buildOptions: {
    baseUrl: "/Snowpacked-Boct/",
  },
  plugins: [
    "@snowpack/plugin-sass",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-webpack",
  ],
};
