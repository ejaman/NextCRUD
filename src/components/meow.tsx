"use client";

import React, { useEffect, useState } from "react";

// 매번 새로운 facts를 보여주고 싶어서 & 부가 기능이기 때문에 CSR로 처리
export default function Meow() {
  const [fact, setFact] = useState<string>("...");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com", {
      next: { revalidate: 0 },
      // default: force-cache, no-store -> SSR처럼 처리됨
      // cache: "force-cache",
    })
      .then((res) => res.json())
      .then((data) => setFact(data.data[0]));
  }, []);

  return <article>{fact}</article>;
}
