import React from 'react';
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


const useStyles = makeStyles( theme =>({
    form:{
        marginTop: 100,
        fontFamily: "Raleway",
        fontWeight: "bold",
        fontSize: 15
    },

    // card :{
    //     width: 500,
    //     height: 500,
    //     // marginLeft: 450,
    //     marginTop: 50,
    //     justifyContent: 'center'
    // },

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

const Schedule = () => {
    const classes = useStyles();


    return(
        <React.Fragment>
        <div>
           <div>
           <CssBaseline/>
           <AppBar position = "fixed" color = "primary">
               <Toolbar>

               </Toolbar>
           </AppBar>
           </div>
        <div className = { classes.form}>
       <Typography className = {classes.form} align = "center">
           Schedule New Task
       </Typography>
       <Grid justify = "center" alignItems = "center">
           <Grid item xs>
             <Card>
                <div>
               <    CardContent>
                        <Avatar className = {classes.avatar} src = "./calendar.jpg"></Avatar>
       {/* <Grid container spacing = {3}> */}
            {/* <Grid xs={12}> */}
                        <TextField required id = "TeamName" name="TeamName" label="Team Name" variant = "outlined" margin = "normal" fullWidth/>
            {/* </Grid> */}
            {/* <Grid xs={12}> */}
                        <TextField required id = "FieldJob" name="FieldJob" label="Job Type"  variant ="outlined" fullWidth/>
            {/* </Grid> */}
            {/* <Grid xs={12}> */}
                         <TextField required id = "Location" name="Location" label="Location" variant = "outlined" margin = "normal" fullWidth/>
            {/* </Grid>
            <Grid xs={12}> */}
                         <TextField required id = "Date" name="Date" label="Date"  variant= "outlined" fullWidth/>
            {/* </Grid> */}
       {/* </Grid> */}
                        <Button color = "primary" variant = "contained" className = {classes.button}> Schedule </Button>
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
