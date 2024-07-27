"use client";
import Image from "next/image";
import TodoPage from "./TodoPage/page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/TodoPage");
  }, []);
  return (
    <>
      <div>This is my TodoListApp </div>
    </>
  );
}
