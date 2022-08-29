import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    { item: 'Home', path: '/' },
    { item: 'Inventory', path: '/Inventory' },
    { item: 'About', path: '/About' }, 
    { item: 'Contact', path: '/Contact-us' }
];

export const Navbar = (props: Props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            Inventory App
        </Typography>
        <Divider />
        <List>
            {navItems.map((text,index) => (
            <ListItem key={text.item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <Link to={text.path}><ListItemText primary={text.item} /></Link>
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <button>Menu</button>
            </IconButton>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Inventory App
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((text,index) => (
                <Button key={text.item} sx={{ color: '#fff' }}>
                    <Link to={text.path} >
                    {text.item}
                    </Link>
                </Button>
                ))}
            </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
        </Box>
        </Box>
    );
}