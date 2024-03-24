import React from "react";

// Memo
// : loading ui with react suspense
// <Suspense fallback={<Loading/>}><Page /></Suspense>

// 전체 골격을 먼저 보내주고 처리하는데 시간이 걸리는 컴포넌트는 로딩 후 보여줌
// -> 레이아웃은 유지, page가 준비되는 동안 page 부분에서만 보임

// 로딩은 다이나믹하게 SSR 할 때 빠르게 의미있는 페이지를 사용자에게 보내주고 그 안에 있는 실제 페이지는 뒤에 병렬적으로 보내줄 때 사용
// 따라서 SSG에선 크게 의미 없음

// check point
// 해당 경로에 있는 라우트에서 한 번만 정의 가능
// cf, parallel data fetching - Promise.all()
// 필요에 따라 suspense boundaries 사용 가능 - 공문 확인 필요

export default function TodoLoading() {
  return <p>loading... 🙏</p>;
}
