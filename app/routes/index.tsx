const dataExamples = Array.from(Array(300).keys());

export default function IndexRoute() {
  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Remix HMR Vercel 🔥</h1>
        <p>
          HMR example demo with Vercel config but fallback to Express server on
          development.
        </p>
        <p>
          Also with Tailwind CSS config to see the development experience on
          styling.
        </p>
      </header>

      <main className="space-y-2">
        <p>
          Either change the website content or the array contents to see the
          HMR.
        </p>
        <ul className="flex gap-2 flex-wrap">
          {dataExamples.map((example) => {
            return <li key={example}>{example}</li>;
          })}
        </ul>
      </main>
    </div>
  );
}
