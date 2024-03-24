import { getToDos } from "@/service/todos";
import Link from "next/link";
import React from "react";

export default async function Todo() {
  // 서버 파일(데이터 베이스)에 있는 투두의 리스트를 읽어와서, 그걸 보여줌
  const todos = await getToDos();
  return (
    <>
      <div>To do List</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
