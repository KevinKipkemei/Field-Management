import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AddBox from '@material-ui/icons/AddBox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/drawer';
import { easing } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CssBaseline, Divider } from '@material-ui/core';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Cards from './Card';


const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        backgroundColor: '#37474F'
    },

    appBar:{
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create([' width', 'margin'],{
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
        backgroundColor: '#1976d2'
    },

    appBarShift:{
        marginLeft: drawerWidth,
        width: 'calc(100% - ${drawerWidth}px)',
        transition: theme.transitions.create([' width', 'margin'],{
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },

    menuButton: {
        marginRight: 36,
    },

    closeButton:{
        marginRight: 36,
    },

    AccountButton:{
        marginLeft: 1140,
    },

    hide:{
        display: 'none',
    },

    drawer:{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },

    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen  
        }),
    },

    drawerClose:{
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),

      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
      },
    },

    toolbar:{
        display: 'flex',
        alighItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },

    content:{
        flexGrow:1,
        padding: theme.spacing(3),
    },

}));

const NavBar = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const [ open, setOpen ] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return(
        <div  className={classes.root}>
            <CssBaseline/>
        <AppBar position="fixed" color="primary" className= {clsx(classes.appBar, {
            [classes.appBarShift]: open,
        })}>
            <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, {
                [classes.hide]: open,
            })}>
            <MenuIcon />
            </IconButton>
            <IconButton edge="start" color ="inherit" aria-label="close drawer" onClick={handleDrawerClose} className={clsx(classes.closeButton, {
                [classes.hide]: !open,
            })}>
                <ChevronLeftIcon/>
            </IconButton>
            <Typography>
                Dashboard
            </Typography>
            <IconButton color= "inherit" className={clsx(classes.AccountButton)}>
                <AccountCircle/>
            </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer variant = "permanent" className={clsx(classes.drawer,{
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        })}
        classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
        }}
        open={open}>
            <div className={classes.toolbar}></div>
            <List>
            {['Add New Team'].map((text) => (
                    <ListItem button onClick={() => props.history.push("/Team")}>
                        <ListItemIcon> <AddBox/> </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            < Divider/>
            <List>
          {['Schedule Job'].map((text) => (
            <ListItem button  onClick={() => props.history.push("/Schedule")}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        < Divider/>
            <List>
          {['View Teams'].map((text) => (
            <ListItem button  onClick={() => props.history.push("/List")}>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
         </Drawer>
         <main className= {classes.content}>
         <div className={classes.toolbar} />

         <Cards/>

         </main>
        </div>
    )
}
export default NavBar;