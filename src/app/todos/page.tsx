import { getToDos } from "@/service/todos";
import Link from "next/link";
import React from "react";

export default function Todo() {
  // 서버 파일(데이터 베이스)에 있는 투두의 리스트를 읽어와서, 그걸 보여줌
  const todos = getToDos();
  return (
    <>
      <div>TODO list</div>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <Link href={`todos/${todo}`}>{todo}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
