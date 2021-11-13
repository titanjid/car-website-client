import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddCar from './AddCar/AddCar';
import Pay from './Pay/Pay';
import MyOrders from './MyOrders/MyOrders';
import useAuth from './../Hooks/useAuth';
import AdminRoute from './../AdminRoute/AdminRoute';
import Review from './Review/Review';
import Button from '@restart/ui/esm/Button';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageOrders from './ManageOrders/ManageOrders';


const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {isAdmin,logOut}=useAuth()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <ListItem >
          <Button onClick={logOut} variant="light" className="btn btn-primary">Logout</Button>
          </ListItem>
      <Divider />
      <List>
          <ListItem >
                <Link to="/home" className="text-decoration-none">Home</Link>
          </ListItem>
          {isAdmin && <Box>
            <ListItem >
              <Link to={`${url}/makeAdmin`} className="text-decoration-none">MakeAdmin</Link>
          </ListItem>
          <ListItem >
               <Link to={`${url}/addCar`} className="text-decoration-none">AddCar</Link>
          </ListItem>
          <ListItem >
               <Link to={`${url}/manageProducts`} className="text-decoration-none">ManageProducts</Link>
          </ListItem>
          <ListItem >
               <Link to={`${url}/manageOrders`} className="text-decoration-none">ManageOrders</Link>
          </ListItem>
          </Box>
          }
          <ListItem >
               <Link to={`${url}/pay`} className="text-decoration-none">Pay</Link>
          </ListItem>
          <ListItem >
               <Link to={`${url}/myOrders`} className="text-decoration-none">MyOrders</Link>
          </ListItem>
          <ListItem >
               <Link to={`${url}/review`} className="text-decoration-none">Review</Link>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
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
            sx={{ mr: 2, display: { sm: 'none' } }}
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
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
               <Switch>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addCar`}>
                        <AddCar></AddCar>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  
  window: PropTypes.func,
};

export default Dashboard;
