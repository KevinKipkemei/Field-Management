import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {db} from './Firebase';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import { CssBaseline, IconButton } from '@material-ui/core'
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftOutlined'
 
const useStyles = makeStyles( theme => ({

    appBar:{
        backgroundColor: '#1976d2'
    },

    form :{
        marginTop: 100,
        fontFamily: "Raleway",
        fontWeight: "bold",
        fontSize: 15
    },

    card :{
        width: 500,
        marginTop: 50
    },

    button :{
        marginTop: 70,
        marginLeft: 370
    }
}))



const AddTeam = (props) => {

const classes = useStyles();

const [Team, setTeam]  = useState("");
const [Leader, setLeader] = useState("");
const [[Members], setMembers] = useState([]);


const addRec = () => {
    db.collection("Teams").doc().set({
        Team: Team,
        Leader: Leader,
        Members: [Members]
    })
   
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
                <AppBar position = "fixed" color="primary">
                    <Toolbar>
                        <IconButton color = "inherit" edge = "start" onClick={() => props.history.goBack()}>
                            <KeyboardArrowLeftRounded/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <div  className = {classes.form}>
                <Typography className = {classes.form} align = "center">
                    Add New Team
                </Typography>
                <Grid>
                    <Grid container justify = "center">
                        <Card className = {classes.card}>
                            <div>
                            <CardContent>
                                <TextField label = "Team Name" variant = "outlined" margin = "normal" onChange = { e => setTeam (e.target.value) } fullWidth/>
                                <TextField label = "Team Leader" variant = "outlined" onChange = {e => setLeader (e.target.value) } fullWidth/>
                                <TextField  label = "Team Members" variant = "outlined" onChange = {e => setMembers (e.target.value) } margin = "normal" fullWidth/>
                                <TextField  label = "Team Members" variant = "outlined" onChange = {e => setMembers (e.target.value) } fullWidth/>
                                <Button variant = "contained" className = {classes.button} onClick = {addRec}> Add</Button>
                            </CardContent>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div> 
        </div>
    </React.Fragment>
)
};



AddTeam.propTypes = {
    Name: PropTypes.string,
    Leader: PropTypes.string,
    Members: PropTypes.string,
    onChange: PropTypes.func
};


export default AddTeam;