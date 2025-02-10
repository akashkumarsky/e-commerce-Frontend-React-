// ** MUI Imports
import { ThemeProvider, createTheme } from "@mui/material";

import AdminPannel from "../Adminpannel";

import { customTheme } from "../theme/Customtheme";

import ProductsTable from "../Table/ProductsTable";

const Dashboard = () => {


  return (
    <div className="adminContainer">
      <ThemeProvider theme={customTheme}>
        <AdminPannel>
         
        </AdminPannel>
      </ThemeProvider>
    </div>
  );
};

export default Dashboard;
