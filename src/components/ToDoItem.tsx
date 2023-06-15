import { Todo } from "@/atom";
import { TodoItem } from "@/pages";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
const ToDoItem = (props: {
  removeToDo: (id: any) => void;
  item: TodoItem;
  id: number;
}) => {
  const { removeToDo, item, id } = props;
  const [todo, setTodo] = useAtom(Todo);
  return (
    <div
      className={`select-none cursor-pointer w-full border-b p-3 flex  items-center`}
    >
      <div
        className="grow-0 w-full "
        onClick={() => {
          let newTodos = [...todo];
          newTodos[id] = { ...newTodos[id], complete: !newTodos[id].complete };
          setTodo(newTodos);
        }}
      >
        <span className="pr-2 text-[14px] text-slate-400">{item?.time}</span>
        <span
          className={`${
            item?.complete === true ? "line-through" : ""
          } text-[20px]`}
        >
          {item?.item}
        </span>
      </div>
      <div onClick={() => removeToDo(id)}>
        <BsTrash className="text-[#e74c3c]" />
      </div>
    </div>
  );
};

export default ToDoItem;
