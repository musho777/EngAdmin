import { Grid } from "@mui/material";
import Question from "examples/Question";
import PropTypes from "prop-types";
import React from "react";
import { useDrag, useDrop } from "react-dnd";

export const SortableItem = ({ data, index, moveCard, Edit }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: "card",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { index, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.2 : 1;
  drag(drop(ref));
  return (
    <Grid ref={ref} style={{ opacity }} item md={12}>
      <Question Edit={() => Edit(index)} index={index} data={data} />
    </Grid>
  );
};
SortableItem.propTypes = {
  data: PropTypes.any,
  id: PropTypes.any,
  moveCard: PropTypes.any,
  index: PropTypes.any,
  Edit: PropTypes.func,
};
