import MDTypography from "components/MDTypography";
import { Grid, RadioGroup, FormControlLabel, Radio, Icon, Card, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import { MiniCard } from "examples/Cards/MiniCards";
import Audio from "./Audio";
import MDBox from "components/MDBox";

function Question({ data, Edit, index }) {
  return (
    <Card style={{ marginBottom: 30 }}>
      <MiniCard text={index + 1} />
      {data.fileType == "audio" ? (
        <Audio audio={data.img} type={data.fileType} name={data.imgFile.name.split(".")[0]} />
      ) : (
        <MDBox display="flex" justifyContent="center">
          <CardMedia
            controls
            component={data.fileType == "video" ? "video" : "img"}
            height={data.img ? 200 : 0}
            src={data.img}
          />
        </MDBox>
      )}
      <Grid mt={2} p={2}>
        <Grid display="flex" justifyContent="space-between">
          <MDTypography style={{ height: 30 }} fontSize={14} color="dark">
            {data.question}
          </MDTypography>
          <Icon onClick={() => Edit(index)}>edit</Icon>
        </Grid>
        <RadioGroup aria-label="option" name="option">
          {data.answeres?.map((elm, i) => {
            if (elm.name)
              return (
                <FormControlLabel
                  key={i}
                  disabled
                  checked={elm.value == data.corectAnswer}
                  value={elm.value}
                  control={<Radio style={{ marginTop: 5 }} />}
                  label={elm.name}
                />
              );
          })}
        </RadioGroup>
      </Grid>
    </Card>
  );
}

Question.defaultProps = {
  data: {},
  Edit: null,
  index: null,
};

Question.propTypes = {
  data: PropTypes.object,
  Edit: PropTypes.func,
  index: PropTypes.number,
};

export default Question;
