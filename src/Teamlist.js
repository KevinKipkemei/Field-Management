import React, {useState, useEffect} from 'react';
import {db} from "./Firebase";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import { CssBaseline, CardContent } from '@material-ui/core';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftOutlined'
import { classes } from 'istanbul-lib-coverage';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';


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
    }
    
}))



const TeamList = (props) => {
    const [teams, setTeams] = useState([])

const classes = useStyles();


useEffect(() => {
    // console.log('effect')
    const unsub = db.collection('Teams').onSnapshot(snapshot => {
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

console.log(teams)

return (
    <React.Fragment>
    <div className = {classes.root}>
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
                Teams
            </Typography>
            <Grid>
            <Grid container justify = "center">
                <Card className = {classes.card}> 
                <div>
                    <CardContent>
                <ul>
                    {teams.map(team => (
                        <li key = {team.id}>
                            <div>
                                <div>{team.Leader}</div>
                                <div>{team.Team}</div>
                            </div>
                        </li>
                    ))}
                </ul>
                </CardContent>
                </div>
                </Card>
            </Grid>
            </Grid>
        </div>
    </div>
    </React.Fragment>
);
};

export default TeamList;