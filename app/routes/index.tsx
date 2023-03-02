const dataExamples = Array.from(Array(10).keys());

export default function IndexRoute() {
  return (
    <div>
      <h1>Remix HMR 🔥</h1>
      <p>with Vercel config but fallback to Express server on development.</p>
      <ul>
        {dataExamples.map((example) => {
          return <li key={example}>{example}</li>;
        })}
      </ul>
    </div>
  );
}
