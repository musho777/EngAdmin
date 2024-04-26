import { Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/users/data/authorsTableData";

const { columns, rows } = authorsTableData();

function Users() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <Grid mt={5} display="flex" justifyContent="end">
        <MDBox>
          <MDInput label="Search here" />
        </MDBox>
      </Grid>
      <Grid mt={5} item xs={12}>
        <Card>
          <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Users Table
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <DataTable
              onClick={() => {
                navigator.navigate("singluser");
              }}
              table={{ columns, rows }}
              isSorted={false}
              entriesPerPage={false}
              showTotalEntries={false}
              noEndBorder
            />
          </MDBox>
        </Card>
      </Grid>
    </DashboardLayout>
  );
}

export default Users;
