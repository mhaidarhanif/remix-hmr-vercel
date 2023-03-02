# Remix HMR Vercel

Remix HMR example with both Vercel config and Express server on development.

- [Remix Docs](https://remix.run/docs)
- [remixv1.14.0](https://github.com/remix-run/remix/releases/tag/remix%401.14.0)
- [remixv1.12.0](https://github.com/remix-run/remix/releases/tag/remix%401.12.0)

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
