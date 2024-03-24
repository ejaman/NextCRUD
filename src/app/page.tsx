import { Inter } from "next/font/google";
import React, { useState } from "react";
import os from "os"; // node APIs
import Counter from "@/components/counter";

// Memo: app 폴더 하의 친구들은 기본적으로 서버 컴포넌트
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  // You're importing a component that needs useState.
  // It only works in a Client Component but none of its parents are marked with "use client",
  // so they're Server Components by default.
  // const [ex, setEx] = useState();

  // HTML을 보내기 때문에
  // 따라서 콘솔이 터미널에만 뜸!
  console.log(1);
  console.log(os.hostname());

  return (
    <div>
      first page
      <section>
        <Counter />
      </section>
    </div>
  );
}
// Memo: 브라우저에서 제공해주는 api는 사용 불가, 대신 node 환경에서 제공해주는 node api 사용 가능
