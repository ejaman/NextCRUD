"use client"; // 에러 컴포넌트는 client component!
import React, { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};
export default function TodosError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const onReset = () => {
    reset();
  };
  return (
    <div>
      <h2>something's wrong 🤔</h2>
      <button onClick={onReset}>retry</button>
    </div>
  );
}
