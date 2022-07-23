import style from "./RequestData.module.css";

import useGetRequest from "../hooks/useGetRequest";
import preloader from "./../img/2.svg";
import cn from "classnames";

function RequestData() {
  const { data, isLoading, errorInfo } = useGetRequest(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (errorInfo) {
    return (
      <div>
        {errorInfo.name}: {errorInfo.message}
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={style.preloader}>
        <img src={preloader} alt="loader"></img>
      </div>
    );
  }

  let tasksArray = data.map((task) => (
    <li
      key={task.id}
      className={cn(style.task_item, {
        [style.task_item_completed]: task.completed,
      })}
    >
      {task.title
        .split("")
        .map((i, index) => (index === 0 ? i.toUpperCase() : i))
        .join("")}
    </li>
  ));

  return (
    <div className={style.basic}>
      <h2 className={style.title}>Task List</h2>
      <ul className={style.task_container}>{tasksArray}</ul>
    </div>
  );
}

export default RequestData;
