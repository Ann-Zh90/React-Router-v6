import { FC } from "react";
import { ITodoItem } from "./types";

import s from "./TodoList.module.css";

interface TodoItemProps {
  todoItem: ITodoItem;
  checkHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//import
const TodoItem: React.FC<TodoItemProps> = ({ todoItem, checkHandler }) => {
  return (
    <li className={s.todoItem} key={todoItem.id}>
      <input
        type="checkbox"
        onChange={checkHandler}
        id={todoItem.id.toString()}
      />
      <label
        htmlFor={todoItem.id.toString()}
        className={todoItem.completed ? s.completed : ""}
      >
        {todoItem.title}
      </label>
    </li>
  );
};

export default TodoItem;
