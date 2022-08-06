import React, { FC } from "react";
import { IUserItem } from "../types";
import { Link } from "react-router-dom";

interface IUserProps {
  user: IUserItem;
}

const UserItem: FC<IUserProps> = ({ user }) => {
  return (
    <li>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  );
};

export default UserItem;
