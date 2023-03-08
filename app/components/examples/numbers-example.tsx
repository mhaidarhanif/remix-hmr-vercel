interface Props {
  numbers: number[];
}

export function NumbersExample({ numbers }: Props) {
  return (
    <ul className="flex gap-2 flex-wrap">
      {numbers.map((number) => {
        return <li key={number}>{number}</li>;
      })}
    </ul>
  );
}
