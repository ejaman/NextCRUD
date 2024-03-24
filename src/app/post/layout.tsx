import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function PostLayout({ children }: Props) {
  return (
    <>
      <div>check post layout</div>
      <section>{children}</section>
    </>
  );
}
