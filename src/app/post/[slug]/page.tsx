import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

// props로 어떤 경로인지 알려줌
export default function Ilsang({ params }: Props) {
  let a;
  return <div>{params.slug} post!</div>;
}

// 지정 x는 SSR, 지정 o는 SSG
export function generateStaticParams() {
  const posts = ["ilsang", "review"];
  return posts.map((post) => ({
    slug: post,
  }));
}
