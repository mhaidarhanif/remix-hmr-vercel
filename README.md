# Remix HMR Vercel

Remix HMR & HDR example with both Vercel config and Express server on development.

The config is just combining the templates from Remix with Express and Vercel based on the environment.

- [Remix Docs](https://remix.run/docs)
- [remix@1.14.0](https://github.com/remix-run/remix/releases/tag/remix%401.14.0)
- [remix@1.12.0](https://github.com/remix-run/remix/releases/tag/remix%401.12.0)

## Workaround

At least as per v1.14.0 we have to do this when not primarily using Express server.

When using pnpm, have to install `react-refresh` to resolve the HMR dependency:

```sh
pnpm add -D react-refresh
```

When running locally in development mode, use either the Express server or Vercel. This by default does not understand the Vercel lambda module format, so we fallback to the standard build output.

```js
const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  server: isDevelopment ? undefined : "./server-vercel.js",
  serverBuildPath: isDevelopment ? "build/index.js" : "api/index.js",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",

  future: {
    unstable_dev: true,
    unstable_tailwind: true,
  },
};
```

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
pnpm i
```

Afterwards, start the Remix development server like so:

```sh
pnpm dev
```

Open up [localhost:3000](http://localhost:3000) and you should be ready to go!

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).
