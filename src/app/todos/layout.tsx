import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function TodoLayout({ children }: Props) {
  return (
    <>
      <div>TODO layout</div>
      <nav>
        <Link href="/post/study">Study</Link>
        <Link href="/post/workout">Work out</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
