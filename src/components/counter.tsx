"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const onSubtractCount = () => {
    setCount((prev) => prev - 1);
  };

  const onAddCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={onSubtractCount}>-</button>
      <p>{count}</p>
      <button onClick={onAddCount}>+</button>
    </div>
  );
}
