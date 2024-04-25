import { Grid, RadioGroup, FormControlLabel, Radio, Icon, Card, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";
import Audio from "./Audio/index";
import { MiniCard } from "examples/Cards/MiniCards";

function NewQuestion({ data, Edit, index, AddNewQuestion }) {
  const EditAddOptions = (text, index) => {
    let item = { ...newData };
    item.answeres[index].name = text;
    setNewData(item);
  };

  useEffect(() => {
    if (Object.keys(data).length) {
      setNewData(data);
    }
  }, [data]);

  const [newData, setNewData] = useState({
    question: "",
    answeres: [
      { name: "", value: 1 },
      { name: "", value: 2 },
      { name: "", value: 3 },
      { name: "", value: 4 },
    ],
    corectAnswer: 1,
    new: false,
    img: "",
    imgFile: "",
    fileType: "",
    edit: false,
  });

  const handleFileChange = (event) => {
    let item = { ...newData };
    const file = event.target.files[0];
    item.imgFile = file;
    item.fileType = file.type.split("/")[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      item.img = e.target.result;
      setNewData(item);
    };
    reader.readAsDataURL(file);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Card style={{ marginBottom: 30 }}>
      <MiniCard text={index + 1} />
      {newData.fileType == "audio" ? (
        <Audio
          audio={newData.img}
          type={newData.fileType}
          name={newData.imgFile.name.split(".")[0]}
        />
      ) : (
        <MDBox display="flex" justifyContent="center">
          <CardMedia
            controls
            component={newData.fileType == "video" ? "video" : "img"}
            height={newData.img ? 240 : 30}
            src={newData.img}
          />
        </MDBox>
      )}
      <Grid p={2}>
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <MDInput
            onChange={(e) => setNewData({ ...newData, question: e.target.value })}
            label={"question"}
            style={{ width: "70%" }}
            multiline
            value={newData.question}
          />
          <MDButton
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            type="file"
          >
            <VisuallyHiddenInput onChange={handleFileChange} type="file" />
          </MDButton>
          <Grid display="flex" gap={1} width={"15%"} alignItems="center" justifyContent="center">
            <Icon onClick={() => AddNewQuestion(index, newData)}>check</Icon>
            <Icon onClick={() => Edit(index)}>clear</Icon>
          </Grid>
        </Grid>

        <RadioGroup aria-label="option" name="option">
          {newData.answeres?.map((elm, i) => {
            return (
              <FormControlLabel
                key={i}
                checked={elm.value == newData.corectAnswer}
                onChange={(e) => setNewData({ ...newData, corectAnswer: e.target.value })}
                value={elm.value}
                control={<Radio style={{ marginTop: 33 }} />}
                label={
                  <MDInput
                    value={elm.name}
                    onChange={(e) => EditAddOptions(e.target.value, i)}
                    label={"option " + (+i + 1)}
                  />
                }
              />
            );
          })}
        </RadioGroup>
      </Grid>
    </Card>
  );
}

NewQuestion.defaultProps = {
  data: {},
  Edit: null,
  index: null,
};

NewQuestion.propTypes = {
  data: PropTypes.object,
  Edit: PropTypes.func,
  index: PropTypes.number,
  CheckAnswer: PropTypes.func,
  AddNewQuestion: PropTypes.func,
};

export default NewQuestion;
