import Grid from "@mui/material/Grid";

import React, { useState } from "react";
import NewQuestion from "examples/Question/newQuestion";
import { Fab } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SortableList } from "../SortableList/index";
import MDSnackbar from "components/MDSnackbar";
import AddIcon from "@mui/icons-material/Add";

function Register() {
  const [error, setError] = useState("");
  const [add, setAdd] = useState(false);
  const [data, setData] = useState([
    {
      question: "1",
      answeres: [
        { name: "1", value: 1 },
        { name: "2", value: 2 },
        { name: "3", value: 3 },
        { name: "4", value: 4 },
      ],
      img: "",
      corectAnswer: 1,
      edit: false,
    },
    {
      question: "2",
      answeres: [
        { name: "1", value: 1 },
        { name: "2", value: 2 },
        { name: "3", value: 3 },
        { name: "4", value: 4 },
      ],
      corectAnswer: 1,
      img: "",
      edit: false,
    },
    {
      question: "3",
      answeres: [
        { name: "1", value: 1 },
        { name: "2", value: 2 },
        { name: "3", value: 3 },
        { name: "4", value: 4 },
      ],
      corectAnswer: 3,
      img: "",
      edit: false,
    },
    {
      question: "4",
      answeres: [
        { name: "1", value: 1 },
        { name: "2", value: 2 },
        { name: "3", value: 3 },
        { name: "4", value: 4 },
      ],
      corectAnswer: 1,
      edit: false,
    },
  ]);
  const AddNewQuestion = (newData) => {
    if (newData.question) {
      let item = [...data];
      item.push(newData);
      setAdd(false);
      setData(item);
    } else {
      setError("question is requred");
    }
  };

  const Edit = (index, changeData, type) => {
    let item = [...data];
    item[index].edit = !item[index].edit;
    if (type != "clear" && changeData && Object.keys(changeData).length) {
      item[index] = changeData;
      item[index].edit = false;
    }
    if (type == "clear") {
      item[index] = data[index];
    }
    setData(item);
  };

  return (
    <Grid>
      <DndProvider backend={HTML5Backend}>
        <SortableList Edit={(index, data, type) => Edit(index, data, type)} items={data} />
      </DndProvider>
      <Grid container spacing={3}>
        {add && (
          <Grid item md={6}>
            <NewQuestion
              Edit={() => setAdd(false)}
              index={data.length}
              AddNewQuestion={(index, data) => AddNewQuestion(data)}
            />
          </Grid>
        )}
      </Grid>
      <Grid container gap={5} mt={3}>
        <Fab onClick={() => setAdd(true)} color="info" aria-label="add">
          <AddIcon />
        </Fab>
        <MDSnackbar
          color="error"
          icon="warning"
          title="Error Message"
          content={error}
          open={error != ""}
          onClose={() => setError("")}
          close={() => setError("")}
          bgWhite
        />
      </Grid>
    </Grid>
  );
}

export default Register;
