import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import AddProduct from "../AddProduct/AddProduct";
import Review from "../Review/Review";
import Payment from "../Payment/Payment";
import MyOrder from "../MyOrder/MyOrder";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import PaymentBlank from "../PaymentBlank/PaymentBlank";
import "./Dashboard.css";

const drawerWidth = 240;

function Dashboard(props) {
  const { logout, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Link style={{ textDecoration: "none", color: "Black" }} to="/home">
        <Button>Home</Button>
      </Link>
      <Divider />
      <br />
      {(admin && (
        <Box>
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/makeAdmin`}
          >
            <Button>Make Admin</Button>
          </Link>
          <Divider />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/manageProducts`}
          >
            <Button>Manage Products</Button>
          </Link>
          <Divider />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/addProduct`}
          >
            <Button>Add Product</Button>
          </Link>
          <Divider />
        </Box>
      )) || (
        <Box>
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/myOrder`}
          >
            <Button>My Order</Button>
          </Link>
          <Divider />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/payment`}
          >
            <Button>Payment</Button>
          </Link>
          <Divider />
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to={`${url}/review`}
          >
            <Button>Review</Button>
          </Link>
          <Divider />
        </Box>
      )}

      <Button onClick={logout}>Logout</Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <h2 style={{ margin: "50px", fontSize: "3rem", color: "coral" }}>
              Welcome to Logic Camera Store's Dashboard
            </h2>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/myOrder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route exact path={`${path}/payment/`}>
            <PaymentBlank></PaymentBlank>
          </Route>
          <Route path={`${path}/payment/:paymentId`}>
            <Payment></Payment>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
