"use client";

import React, { useState } from "react";

// Memo: 실제 이벤트 처리는 하이드레이션 이후 가능
export default function Counter() {
  const [count, setCount] = useState<number>(0);

  console.log("클라이언트에서 동작");

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
