import { useEffect, useState } from "react";
import { SortableItem } from "../SortableItem";
import PropTypes from "prop-types";
import NewQuestion from "examples/Question/newQuestion";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";

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
    <Grid container spacing={2} display="flex">
      {cards.map((card, index) =>
        !card.edit ? (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <SortableItem
                Edit={(index) => Edit(index)}
                data={card}
                index={index}
                moveCard={moveCard}
              />
            </MDBox>
          </Grid>
        ) : (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <NewQuestion
                data={card}
                index={index}
                AddNewQuestion={(index, data) => Edit(index, data)}
                Edit={(index, data) => Edit(index, data, "clear")}
              />
            </MDBox>
          </Grid>
        )
      )}
    </Grid>
  );
};

SortableList.propTypes = {
  items: PropTypes.array,
  Edit: PropTypes.func,
};
