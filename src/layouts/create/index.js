import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Register from "./components/Register";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox py={10}>
        <Register />
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;
