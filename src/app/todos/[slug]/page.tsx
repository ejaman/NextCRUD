import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

// props로 어떤 경로인지 알려줌
export default function Todo({ params }: Props) {
  let a;
  // 서버 파일에 있는 데이터 중 해당 투두의 정보를 찾아서 그걸 보여줌
  return <div>TODO!: {params.slug}</div>;
}

// 지정 x는 SSR, 지정 o는 SSG
export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만드러 둘 수 있도록 처리
  const cats = ["study", "workout"];
  return cats.map((cat) => ({
    slug: cat,
  }));
}

export async function generateMetadata({ params }: Props) {
  return { title: `TODO | ${params.slug}` };
}
