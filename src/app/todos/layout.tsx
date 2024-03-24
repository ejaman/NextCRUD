import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "TODO",
  description: "할일 목록이다.",
  icons: {
    icon: "./favicon.ico",
  },
};

type Props = {
  children: React.ReactNode;
};
export default function TodoLayout({ children }: Props) {
  return (
    <div className="bg-amber-50 h-full">
      {/* TODO: 상태별로 볼 수 있도록 처리하기 */}
      {/* <nav className="flex justify-center space-x-4 bg-amber-50 py-2">
        <ul className="flex justify-center space-x-4">
          <li className="text-gray-800 font-bold hover:text-amber-600">
            <Link href="/todos/todo">To do</Link>
          </li>
          <li className="text-gray-800 font-bold hover:text-amber-600">
            <Link href="/todos/doing">Working on</Link>
          </li>
          <li className="text-gray-800 font-bold hover:text-amber-600">
            <Link href="/todos/done">Done</Link>
          </li>
        </ul>
      </nav> */}
      <div className="text-center text-2xl font-bold p-3 bg-amber-200">
        <Link href="/todos"> 🐱 Tada..! 🐱</Link>
      </div>
      <section>{children}</section>
    </div>
  );
}
