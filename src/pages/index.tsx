import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import ToDoList from "@/components/ToDoList";
import { useCookies } from "react-cookie";
import { useAtom } from "jotai";
import { Todo } from "@/atom";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });
export type TodoItem = {
  item: string;
  time: string;
  complete: boolean;
};
export default function Home() {
  const [todos, setToDo] = useAtom(Todo);
  const [cookies, setCookie, removeCookie] = useCookies(["my_todos"]);

  useEffect(() => {
    if (cookies.my_todos) setToDo(cookies.my_todos);
  }, []);

  useEffect(() => {
    removeCookie("my_todos");
    setCookie("my_todos", JSON.stringify(todos));
  }, [todos]);

  const removeToDo = (id: number) => {
    const newTodos = todos.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    setToDo(newTodos); // state update
  };
  const addToDoHandler = (item: string) => {
    setToDo([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString(),
        complete: false,
      },
    ]);
  };
  return (
    <div
      className={`bg-black h-screen w-screen p-3 flex items-center justify-center ${poppins.className}`}
    >
      <div className="rounded w-full md:w-1/2 max-w-[750px] h-full flex flex-col  shadow-2xl bg-white">
        <Input handler={addToDoHandler} />
        <div className="flex-1 overflow-scroll no-scrollbar">
          <ToDoList removeHandler={removeToDo} />
        </div>
      </div>
    </div>
  );
}
