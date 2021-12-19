import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
// import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import AllOrders from '../ManageAllOrdes/AllOrders/AllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import UpdateOrders from '../ManageAllOrdes/UpdateOrders/UpdateOrders';
import UpdateProduct from '../ManageProducts/UpdateProduct/UpdateProduct';
import AllProducts from '../ManageProducts/AllProducts/AllProducts';


const drawerWidth = 240;


function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin, logOut } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to="/"><Button>Home</Button></Link>

            {!admin && <Box>
                <Link style={{ textDecoration: 'none' }} to={`${url}/addReview`}><Button >Review</Button></Link>
                <br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/myOrders`}><Button >My Orders</Button></Link>
                <br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/pay`}><Button >Pay</Button></Link>

            </Box>}
            {admin && <Box>
                <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link>
                <Link style={{ textDecoration: 'none' }} to={`${url}/addProducts`}><Button>Add Products</Button></Link>
                <Link style={{ textDecoration: 'none' }} to={`${url}/allOrders`}><Button >Manage All Orders</Button></Link>
                <Link style={{ textDecoration: 'none' }} to={`${url}/allProducts`}><Button >Manage All Products</Button></Link>


            </Box>}
            <Button onClick={logOut} color="inherit">Logout</Button>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
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
                    <Route exact path={path}>
                        {/* <DashboardHome></DashboardHome> */}
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route >
                    <Route path={`${path}/addProducts`}>
                        <AddProduct></AddProduct>
                    </Route >
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route >
                    <Route path={`${path}/allOrders`}>
                        <AllOrders></AllOrders>
                    </Route >
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route >
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route >
                    <Route path={`${path}/updateOrders/:orderId`}>
                        <UpdateOrders></UpdateOrders>
                    </Route >
                    <Route path={`${path}/updateProduct/:productId`}>
                        <UpdateProduct></UpdateProduct>
                    </Route >
                    <Route path={`${path}/allProducts`}>
                        <AllProducts></AllProducts>
                    </Route >

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
