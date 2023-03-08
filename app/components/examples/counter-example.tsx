import { useState } from "react";

import { Button } from "~/components";

interface Props {
  initialNumber: number;
}

export function CounterExample({ initialNumber }: Props) {
  const [count, setCount] = useState(initialNumber);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>
        Counter: <span className="font-bold">{count}</span>
      </p>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleDecrement}>-</Button>
    </div>
  );
}
