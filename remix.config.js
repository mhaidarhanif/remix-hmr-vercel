/** @type {import('@remix-run/dev').AppConfig} */

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  /**
   * When running locally in development mode,
   * use either the built-in remix server or Vercel.
   * This by default does not understand the vercel lambda module format,
   * so we fallback to the standard build output.
   */
  server: isDevelopment ? undefined : "./server-vercel.js",
  serverBuildPath: isDevelopment ? "build/index.js" : "api/index.js",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",

  future: {
    unstable_dev: true,
  },
};
