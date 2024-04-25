import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

export const MiniCard = ({ text }) => {
  return (
    <MDBox
      variant="gradient"
      bgColor={"dark"}
      color={"white"}
      coloredShadow={"dark"}
      borderRadius="xl"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="4rem"
      height="4rem"
      mt={-3}
      ml={2}
      position="absolute"
    >
      <MDTypography fontSize={14} color="white">
        {text}
      </MDTypography>
    </MDBox>
  );
};

MiniCard.propTypes = {
  text: PropTypes.string,
};
