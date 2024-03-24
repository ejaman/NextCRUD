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
    <>
      <div>TODO layout</div>
      <nav>
        <Link href="/todos/todo">To do</Link>
        <Link href="/todos/doing">Working on</Link>
        <Link href="/todos/done">Done</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
