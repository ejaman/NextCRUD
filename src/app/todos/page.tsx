import Link from "next/link";
import React from "react";

const todoList = ["study next.js", "stay hydrated!", "10min home training"];

export default function Todo() {
  // 서버 파일(데이터 베이스)에 있는 투두의 리스트를 읽어와서, 그걸 보여줌
  return (
    <>
      <div>TODO list</div>
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>
            <Link href={`todos/${todo}`}>{todo}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
