import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent'
import Button from'@material-ui/core/Button'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftOutlined'
import { thisExpression } from '@babel/types';
import {db} from "./Firebase"
import {useState, useEffect} from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


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
    },

    formControl: {
        minWidth: 120
      }
}))


const Schedule = (props, {Date, Location, Job, Name}) => {


const classes = useStyles();

const [jobs, setJobs] = useState([])

const [selected, setSelected] = useState('')

const handleChange = event => {
    setSelected(event.target.value);
  };
   
console.log(selected)
// const addRec = () => {
//     db.collection("Schedule").doc().set({
//         Date: "",
//         Job: "",
//         Location: "",
//         Name:""})
   
//      .then(function(){
//        console.log("Successful update");
//      })
   
//      .catch (function(error){
//        console.error("Something went wrong");
//      })
//  };

 
useEffect(() => {
    // console.log('effect')
    const unsub = db.collection('Schedule').onSnapshot(snapshot => {
        const allJobs = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setJobs(allJobs);
    });
    return () => {
        // console.log('cleanup');
        unsub();
    };
}, [])

const deleteTeams = id => {
    db.collection('Schedule')
    .doc(id)
    .delete();
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
           <Grid container justify = "center" direction = "column" alignItems = "center">
               { jobs.map( job => (
             <Card className = {classes.card} key = {job.id}>
                <div>
               <CardContent>
                            <div>
                                <div>Job Type: {job.Job}</div>
                                <div>Job Location: {job.Location}</div>
                                <div>Customer Contact: {job.Contact}</div>
                            </div>
                            <div>
                                <Grid container direction = "row"   spacing = {5}>
                                    <Grid item>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel> Assign Team</InputLabel>
                                            <Select value = {selected}  onChange = {handleChange}> 
                                                <MenuItem value = "Team One">Team One</MenuItem>
                                                <MenuItem value = "Team Two">Team Two</MenuItem>
                                                <MenuItem value = "Team Three">Team Three</MenuItem>
                                                <MenuItem value = "Team Four">Team Four</MenuItem>
                                                <MenuItem value = "Team Five">Team Five</MenuItem>
                                                <MenuItem value = "Team Six">Team Six</MenuItem>
                                            </Select>
                                        </FormControl>
                               </Grid>
                               <Grid container direction = "column" >
                                   <Button color="primary">Update</Button>
                               </Grid>

                               {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                               <Grid>
                                               <KeyboardDatePicker
                                                margin="normal"
                                                id="date-picker-dialog"
                                                label="Date picker dialog"
                                                format="MM/dd/yyyy"
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                                />
                               </Grid>
                               </MuiPickersUtilsProvider> */}
                               </Grid>
                            </div>                  
               </CardContent>
                </div>
            </Card>
               ))}
            </Grid>
       </Grid>
       </div>
       </div>
       </React.Fragment>
    )
}




export default Schedule;
