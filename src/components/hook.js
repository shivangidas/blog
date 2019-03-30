import React from "react";
import { useState } from "react";
function Hook() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </section>
  );
}
export default Hook;
