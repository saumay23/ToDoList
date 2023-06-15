import { atom, useAtom } from "jotai";
import { TodoItem } from "./pages";

export const Todo = atom<TodoItem[]>([]);
