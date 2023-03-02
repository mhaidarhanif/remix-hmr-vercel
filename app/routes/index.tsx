import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const examples = Array.from(Array(100).keys());
  return json({ examples });
}

export default function IndexRoute() {
  const { examples } = useLoaderData<typeof loader>();

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-2xl font-bold mb-2">Remix HMR Vercel 🔥</h1>
        <p>
          HMR and HDR example demo with Vercel config but fallback to Express
          server on development.
        </p>
        <p>
          Also with Tailwind CSS config to see the development experience on
          styling.
        </p>
      </header>

      <main className="space-y-2">
        <ul>
          <li>
            <span>Repo: </span>
            <a
              className="text-blue-300"
              href="https://github.com/mhaidarhanif/remix-hmr-vercel"
            >
              mhaidarhanif/remix-hmr-vercel
            </a>
          </li>
          <li>
            <span>Demo: </span>
            <a
              className="text-blue-300"
              href="  https://remix-hmr-vercel.vercel.app"
            >
              remix-hmr-vercel.vercel.app
            </a>
          </li>
        </ul>
        <p>
          Either change the website content or the array contents to see the HMR
          and HDR.
        </p>
        <ul className="flex gap-2 flex-wrap">
          {examples.map((example) => {
            return <li key={example}>{example}</li>;
          })}
        </ul>
      </main>
    </div>
  );
}
