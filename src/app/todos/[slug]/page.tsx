import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

// props로 어떤 경로인지 알려줌
export default function Todo({ params }: Props) {
  let a;
  return <div>{params.slug} TODO!</div>;
}

// 지정 x는 SSR, 지정 o는 SSG
export function generateStaticParams() {
  const cats = ["study", "workout"];
  return cats.map((cat) => ({
    slug: cat,
  }));
}

export async function generateMetadata({ params }: Props) {
  return { title: `TODO | ${params.slug}` };
}
