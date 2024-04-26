import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox
      onClick={() => (window.location = "/singluser")}
      display="flex"
      alignItems="center"
      lineHeight={1}
    >
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );
  Author.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
  Job.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  return {
    columns: [
      { Header: "author", accessor: "author", width: "25%", align: "left" },
      { Header: "last tarife", accessor: "function", align: "left" },
      // { Header: "status", accessor: "status", align: "center" },
      { Header: "started", accessor: "started", align: "center" },
      { Header: "ended", accessor: "ended", align: "center" },
      { Header: "last login", accessor: "last_login", align: "center" },
      { Header: "general purchases", accessor: "general_purchases", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        started: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/04/18
          </MDTypography>
        ),
        ended: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/06/18
          </MDTypography>
        ),
        last_login: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/04/18,19:30
          </MDTypography>
        ),
        general_purchases: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            65$
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        started: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/04/18
          </MDTypography>
        ),
        ended: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/06/18
          </MDTypography>
        ),
        last_login: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/04/18,19:30
          </MDTypography>
        ),
        general_purchases: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            65$
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        started: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/04/18
          </MDTypography>
        ),
        ended: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/06/18
          </MDTypography>
        ),
        last_login: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/04/18,19:30
          </MDTypography>
        ),
        general_purchases: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            65$
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        started: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/04/18
          </MDTypography>
        ),
        ended: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/06/18
          </MDTypography>
        ),
        last_login: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/04/18,19:30
          </MDTypography>
        ),
        general_purchases: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            65$
          </MDTypography>
        ),
      },
    ],
  };
}
