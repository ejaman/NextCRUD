import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function PostLayout({ children }: Props) {
  return (
    <>
      <div>check post layout</div>
      <nav>
        <Link href="/post/ilsang">Ilsang</Link>
        <Link href="/post/review">Review</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
