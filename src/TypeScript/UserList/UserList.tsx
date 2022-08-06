import React, { FC } from "react";
import { useState, useEffect } from "react";
import s from "../TodoList.module.css";
import { IUserItem } from "../types";
import UserItem from "./UserItem";

const UserList: FC = () => {
  const [userList, setUserList] = useState<IUserItem[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userList: IUserItem[] = await response.json();
        setUserList(userList);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        setError(message);
      }
    };
    fetchUserList();
  }, []);

  const userItemList = userList.map((item) => (
    <UserItem user={item} key={item.id} />
  ));

  return (
    <div>
      {error && <div>{error}</div>}
      {!error && <ol className={s.todoList}>{userItemList}</ol>}
    </div>
  );
};

export default UserList;
