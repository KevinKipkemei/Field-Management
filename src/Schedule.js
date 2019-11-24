import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent'
import Button from'@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftOutlined'
import { thisExpression } from '@babel/types';
import {db} from "./Firebase"


const useStyles = makeStyles( theme =>({
    

    form:{
        marginTop: 100,
        fontFamily: "Raleway",
        fontWeight: "bold",
        fontSize: 15
    },

    appBar: {
        backgroundColor: '#1976d2'
    },

    card :{
        width: 500,
        marginTop: 50
    },

    button :{
        marginTop: 70,
        marginLeft: 370
    },

    avatar:{
        height: 70,
        width: 70,
        marginBottom: 20,
        marginLeft: 200
    }
}))


const Schedule = (props, {Date, Location, Job, Name}) => {


const classes = useStyles();
   

const addRec = () => {
    db.collection("Schedule").doc().set({
        Date: "",
        Job: "",
        Location: "",
        Name:""})
   
     .then(function(){
       console.log("Successful update");
     })
   
     .catch (function(error){
       console.error("Something went wrong");
     })
 };



    return(
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
        <div className = { classes.form}>
       <Typography className = {classes.form} align = "center">
           Schedule New Task
       </Typography>
       <Grid>
           <Grid container justify = "center">
             <Card className = {classes.card}>
                <div>
               <CardContent>
                        <Avatar className = {classes.avatar} src = "./calendar.jpg"></Avatar>
                        <TextField required id = "TeamName" name="Name" value = {Name}label="Team Name" variant = "outlined" margin = "normal" fullWidth/>
                        <TextField required id = "FieldJob" name="Job" value = {Job} label="Job Type"  variant ="outlined" fullWidth/>
                         <TextField required id = "Location" name="Location" value = {Location} label="Location" variant = "outlined" margin = "normal" fullWidth/>
                         <TextField required id = "Date" name="Date" label="Date" value = {Date}  variant= "outlined"  fullWidth/>
                        <Button variant = "contained" color = '#1976d2' className = {classes.button} onClick = {addRec}> Schedule </Button>
                    </CardContent>
                </div>
            </Card>
            </Grid>
       </Grid>
       </div>
       </div>
       </React.Fragment>
    )
}




export default Schedule;
