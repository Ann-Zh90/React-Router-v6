import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUserItem } from "../types";

const UserInfo: FC = () => {
  const [userInfo, setUserInfo] = useState<IUserItem | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const userInfo: IUserItem = await response.json();
      setUserInfo(userInfo);
    };
    fetchUser();
  }, [id]);

  const onClickHandler = () => navigate(-1);
  return (
    <div>
      {userInfo && <p>{JSON.stringify(userInfo, null, 2)}</p>}
      <button onClick={onClickHandler}>Back</button>
    </div>
  );
};

export default UserInfo;
