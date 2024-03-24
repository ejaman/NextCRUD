import { getToDos } from "@/service/todos";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const todos = await getToDos();
  return NextResponse.json({ todos });
}
