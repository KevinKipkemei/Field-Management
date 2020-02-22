import React, {useState, useEffect} from 'react';
import {db} from "./Firebase";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { CssBaseline} from '@material-ui/core';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftOutlined'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles ( theme => ({

    root:{
        backgroundColor: '#37474F'
    },

    appBar : {
        backgroundColor: "#1976d2"
    },

    form:{
        marginTop: 100,
        fontFamily: "Raleway",
        fontWeight: "bold",
        fontSize: 15
    },

    card :{
        width: 900,
        marginTop: 50,
        height : 400
    },

    grid : {
        color: "#1976d2"
    },

    list: {
        width: '50%',
        maxWidth: 350,
        backgroundColor: theme.palette.background.paper,
        margin: 30
      },

      chip: {
        margin: theme.spacing(0.5),
      },
      section1: {
        margin: theme.spacing(3, 2),
      },
      section2: {
        margin: theme.spacing(2),
      },
      section3: {
        margin: theme.spacing(3, 1, 1),
      },
    
}))



const TeamList = (props) => {
    const [teams, setTeams] = useState([])

const classes = useStyles();



useEffect(() => {
    // console.log('effect')
    const unsub = db.collection('Schedule').onSnapshot(snapshot => {
        const allTeams = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setTeams(allTeams);
    });
    return () => {
        // console.log('cleanup');
        unsub();
    };
}, [])

const deleteTeams = id => {
    db.collection('Teams')
    .doc(id)
    .delete();
};



return (
    <React.Fragment>
    <div>
        <div>
            <CssBaseline/>
                <AppBar position = "fixed" color = "primary" className = {classes.appBar}>
                    <Toolbar>
                        <IconButton color = "inherit" edge = "start" onClick={() => props.history.goBack()}>
                            <KeyboardArrowLeftRounded/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
        </div>
        <div className = {classes.form}>
            <Typography className = {classes.form} align = "center">
                Progress
            </Typography>
            <Grid>
            <Grid container direction = "row">
                    {teams.map(team => (
                            <div  key = {team.id} className={classes.list}>
                                <div className={classes.section1}>
                                        <Grid container alignItems = "center">
                                            <Grid item xs>
                                                <Typography gutterBottom variant = "h4">
                                                    {team.Name}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography gutterBottom variant = "h6">
                                                    {team.Job}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography color = "textSecondary" variant = "body2">
                                                {team.Location}
                                        </Typography>
                                </div>
                                <div>
                                    <Typography gutterBottom className={classes.section2} variant = "body1">
                                        Progress
                                    </Typography>
                                </div>
                                <div>
                                    <Chip color = "primary" className={classes.chip} label = "Pending"/>
                                    <Chip className={classes.chip} label = "Started"/>
                                    <Chip className={classes.chip} label = "Complete"/>
                                </div>
                                <div className={classes.section3}>
                                    <Button color = "primary" onClick={() => props.history.push("/Message")}>Contact Customer</Button>
                                </div>
                                <Divider variant = "middle"/>
                            </div>
                    ))}
            </Grid>
            </Grid>
        </div>
    </div>
    </React.Fragment>
);
};


export default TeamList;