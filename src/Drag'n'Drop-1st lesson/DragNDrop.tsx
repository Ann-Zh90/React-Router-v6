import React, { FC, useState } from "react";

import s from "./DragNDrop.module.css";

interface ICardItem {
  id: number;
  order: number;
  text: string;
}

const DragNDrop: FC = () => {
  const [cardList, setCardList] = useState<ICardItem[]>([
    { id: 1, order: 3, text: "КАРТОЧКА 3" },
    { id: 2, order: 1, text: "КАРТОЧКА 1" },
    { id: 3, order: 2, text: "КАРТОЧКА 2" },
    { id: 4, order: 4, text: "КАРТОЧКА 4" },
  ]);

  const [currentCard, setCurrentCard] = useState<ICardItem | null>(null);

  const onDragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    card: ICardItem
  ) => {
    setCurrentCard(card);
  };

  const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).style.background = "white";
  };

  const onDragEndHandler = (
    e: React.DragEvent<HTMLDivElement>,
    card: ICardItem
  ) => {
    console.log(e.target);
  };

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLDivElement).style.background = "lightgrey";
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, card: ICardItem) => {
    e.preventDefault();
    (e.target as HTMLDivElement).style.background = "white";

    setCardList(
      cardList.map((c) => {
        if (currentCard) {
          if (c.id === card.id) {
            return { ...c, order: currentCard.order };
          }
          if (c.id === currentCard.id) {
            return { ...c, order: card.order };
          }
        }
        return c;
      })
    );
  };
  console.log(cardList);

  return (
    <div className={s.cardContainer}>
      {cardList
        .sort((a, b) => a.order - b.order)
        .map((card) => (
          <div
            draggable={true}
            onDragStart={(e) => onDragStartHandler(e, card)}
            onDragLeave={(e) => onDragLeaveHandler(e)}
            onDragEnd={(e) => onDragEndHandler(e, card)}
            onDragOver={(e) => onDragOverHandler(e)}
            onDrop={(e) => dropHandler(e, card)}
            className={s.card}
            key={card.id}
          >
            {card.text}
          </div>
        ))}
    </div>
  );
};

export default DragNDrop;
