import { Form } from "@remix-run/react";

import { Button } from "~/components";

export function FormExample() {
  return (
    <Form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="text-black"
          type="email"
          name="email"
          id="email"
          placeholder="name@example.com"
        />
      </div>

      <Button type="submit">Submit</Button>
    </Form>
  );
}
