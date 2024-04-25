import { useEffect, useState } from "react";
import { SortableItem } from "../SortableItem";
import PropTypes from "prop-types";
import NewQuestion from "examples/Question/newQuestion";

export const SortableList = ({ items, Edit }) => {
  const [cards, setCards] = useState(items);
  useEffect(() => {
    setCards(items);
  }, [items]);
  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    const newCards = [...cards];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);
    setCards(newCards);
  };

  return (
    <div>
      {cards.map((card, index) =>
        !card.edit ? (
          <SortableItem
            Edit={(index) => Edit(index)}
            key={index}
            data={card}
            index={index}
            moveCard={moveCard}
          />
        ) : (
          <NewQuestion
            key={index}
            index={index}
            data={card}
            AddNewQuestion={(index, data) => Edit(index, data)}
            Edit={(index, data) => Edit(index, data, "clear")}
          />
        )
      )}
    </div>
  );
};

SortableList.propTypes = {
  items: PropTypes.array,
  Edit: PropTypes.func,
};
