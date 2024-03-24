import Link from "next/link";
import React from "react";

const todoList = ["study next.js", "stay hydrated!", "10min home training"];

export default function Todo() {
  let a;
  return (
    <>
      <div>TODO list</div>
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>
            <Link href={`todo/${todo}`}>{todo}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
