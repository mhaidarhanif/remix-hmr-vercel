import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { CounterExample, FormExample, NumbersExample } from "~/components";

export async function loader() {
  const INITIAL_NUMBER = 10 * 3;
  const numbers = Array.from(Array(INITIAL_NUMBER).keys());

  return json({
    initialNumber: INITIAL_NUMBER,
    numbers,
  });
}
export default function IndexRoute() {
  const { initialNumber, numbers } = useLoaderData<typeof loader>();

  return (
    <div className="p-8 space-y-8 flex flex-col min-h-screen">
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
        <p>
          Either change the website content or the loader data to see the HMR
          and HDR in action.
        </p>
      </header>

      <main className="space-y-4 grow divide-y divide-white">
        <NumbersExample numbers={numbers} />

        <CounterExample initialNumber={initialNumber} />

        <FormExample />
      </main>

      <footer>
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
      </footer>
    </div>
  );
}
