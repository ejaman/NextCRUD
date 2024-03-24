import { getTodo, getToDos } from "@/service/todos";
import { notFound } from "next/navigation";

export const revalidate = 3; // for ISR

type Props = {
  params: {
    slug: string;
  };
};

// props로 어떤 경로인지 알려줌
export default async function Todo({ params: { slug } }: Props) {
  const todo = await getTodo(slug);
  if (!todo) {
    notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 투두의 정보를 찾아서 그걸 보여줌
  return <div>TODO - {todo.desc}</div>;
}

// 지정 x는 SSR, 지정 o는 SSG
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만드러 둘 수 있도록 처리(SSG)
  const todos = await getToDos();
  return todos.map((todo) => ({
    slug: todo.id,
  }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const todo = await getTodo(slug);
  return { title: `TODO | ${todo?.title}` };
}
