import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Route, Routes, useNavigate } from "react-router-dom";
import { customTheme } from "./theme/Customtheme";
import AdminNavbar from "./Navigation/AdminNavigation";
import Dashboard from "./dashboad/Dashboard";
import CreateProductForm from "./form/CreateProductForm";
import UpdateProductForm from "./form/UpdateProductForm";
import ProductsTable from "./Table/ProductsTable";
import OrdersTable from "./Table/OrdersTable";

const drawerWidth = 260;
const menu = [
  {name:"Home", path:"/"},
  { name: "Products", path: "/admin/products" },
  { name: "Add Product", path: "/admin/product/create" },
];

export default function AdminPannel() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box sx={{ overflow: "auto", height: "100vh", backgroundColor: "#1E1E1E", color: "white" }}>
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton sx={{ "&:hover": { backgroundColor: "#333" } }}>
              <ListItemIcon sx={{ color: "white" }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "gray" }} />
    </Box>
  );

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <CssBaseline />
        <AdminNavbar handleSideBarViewInMobile={() => setSideBarVisible(true)} />

        <Drawer
          variant={isLargeScreen ? "permanent" : "temporary"}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", backgroundColor: "#1E1E1E" },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={() => setSideBarVisible(false)}
        >
          {drawer}
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#121212", color: "white", minHeight: "100vh", width: "100%" }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product/create" element={<CreateProductForm />} />
            <Route path="/product/update/:productId" element={<UpdateProductForm />} />
            <Route path="/products" element={<ProductsTable />} />
            <Route path="/orders" element={<OrdersTable />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
