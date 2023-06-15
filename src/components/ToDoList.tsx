import { TodoItem } from "@/pages";
import React from "react";
import ToDoItem from "./ToDoItem";
import { useAtom } from "jotai";
import { Todo } from "@/atom";

const ToDoList = (props: { removeHandler: (id: number) => void }) => {
  const { removeHandler } = props;
  const [data] = useAtom(Todo);
  return (
    <div className="p-3">
      {data?.map((item, index) => {
        return <ToDoItem removeToDo={removeHandler} item={item} id={index} />;
      })}
    </div>
  );
};

export default ToDoList;
