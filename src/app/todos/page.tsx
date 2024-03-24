import Meow from "@/components/meow";
import { checkState, getToDos, TodoState } from "@/service/todos";
import Link from "next/link";

// export const revalidate = 3; // for ISR

export default async function Todo() {
  // 서버 파일(데이터 베이스)에 있는 투두의 리스트를 읽어와서, 그걸 보여줌
  // throw new Error(); // for checking error UI
  const todos = await getToDos();

  return (
    <>
      {/* <div className="flex justify-end">
        <button className='bg-orange-400 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded"'>
          add
        </button>
      </div> */}
      <ul className="p-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link className="font-medium flex gap-1" href={`todos/${todo.id}`}>
              <div>{checkState(todo.state)}</div>
              <p>{todo.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Meow /> */}
    </>
  );
}
