import React, { FC, useState } from "react";
import s from "./Boards.module.css";

interface ITask {
  id: number;
  title: string;
}

interface IBoard {
  id: number;
  title: string;
  items: ITask[];
}

const Boards: FC = () => {
  const [boards, setBoards] = useState<IBoard[]>([
    {
      id: 1,
      title: "Сделать",
      items: [
        { id: 1, title: "Пойти в магазин" },
        { id: 2, title: "Выкинуть мусор" },
        { id: 3, title: "Покушать" },
      ],
    },
    {
      id: 2,
      title: "Проверить",
      items: [
        { id: 1, title: "Код ревью" },
        { id: 2, title: "Задача на факториал" },
        { id: 3, title: "Задача на Фибоначчи" },
      ],
    },
    {
      id: 3,
      title: "Сделано",
      items: [
        { id: 1, title: "Снять видео" },
        { id: 2, title: "Смонтировать" },
        { id: 3, title: "Отрендерить" },
      ],
    },
  ]);
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);
  const [currentBoard, setCurrentBoard] = useState<IBoard | null>(null);

  const onDragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    task: ITask,
    board: IBoard
  ) => {
    setCurrentBoard(board);
    setCurrentTask(task);
  };

  const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).style.boxShadow = "none";
  };

  const onDragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {};

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLDivElement).style.boxShadow = "0 4px 3px gray";
  };

  const dropHandler = (
    e: React.DragEvent<HTMLDivElement>,
    task: ITask,
    board: IBoard
  ) => {
    e.preventDefault();
    e.stopPropagation();
    (e.target as HTMLDivElement).style.boxShadow = "none";
    const dropIndex = board.items.indexOf(task);
    if (currentTask && currentBoard) {
      const currentIndex = currentBoard.items.indexOf(currentTask);
      currentBoard.items.splice(currentIndex, 1);
      board.items.splice(dropIndex + 1, 0, currentTask);
      setBoards(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard.id) {
            return currentBoard;
          }
          return b;
        })
      );
    }
  };

  const onDropCardHandler = (
    e: React.DragEvent<HTMLDivElement>,
    board: IBoard
  ) => {
    e.preventDefault();
    console.log("dscs");
    if (currentTask && currentBoard) {
      board.items.push(currentTask);
      const currentIndex = currentBoard.items.indexOf(currentTask);
      currentBoard.items.splice(currentIndex, 1);
      setBoards(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard.id) {
            return currentBoard;
          }
          return b;
        })
      );
    }
  };

  return (
    <div className={s.boardContainer}>
      {boards.map((board) => (
        <div
          className={s.board}
          key={board.id}
          draggable={true}
          onDragOver={(e) => onDragOverHandler(e)}
          onDragLeave={(e) => onDragLeaveHandler(e)}
          onDrop={(e) => onDropCardHandler(e, board)}
        >
          <div className={s.boardTitle}>{board.title}</div>
          {board.items.map((item) => (
            <div
              className={s.item}
              key={item.id}
              draggable={true}
              onDragStart={(e) => onDragStartHandler(e, item, board)}
              onDragLeave={(e) => onDragLeaveHandler(e)}
              // onDragEnd={(e) => onDragEndHandler(e, card)}
              onDragOver={(e) => onDragOverHandler(e)}
              onDrop={(e) => dropHandler(e, item, board)}
            >
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Boards;
