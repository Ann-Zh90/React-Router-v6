import React, { FC } from "react";
import { useState, useEffect } from "react";
import { ITodoItem } from "./types";
import TodoItem from "./TodoItem";

import s from "./TodoList.module.css";

const TodoList: FC = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=20"
        );
        const todoList: ITodoItem[] = await response.json();
        setTodoList(todoList);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        setError(message);
      }
    };
    fetchTodoList();
  }, []);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let status = e.currentTarget.checked;
    let id = e.currentTarget.id;

    setTodoList((prev) => {
      let complitedTodo = prev.find((item) => item.id === +id);
      if (complitedTodo) complitedTodo.completed = status;
      return [...prev];
    });
  };

  const todoItemsList = todoList.map((todoItem) => (
    <TodoItem
      todoItem={todoItem}
      checkHandler={checkHandler}
      key={todoItem.id}
    />
  ));

  return (
    <div>
      {error && <div>{error}</div>}
      {!error && <ul className={s.todoList}>{todoItemsList}</ul>}
    </div>
  );
};

export default TodoList;
