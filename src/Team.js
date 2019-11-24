import React from 'react';
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



const AddTeam = (props, {Name, Leader, Members}) => {

const classes = useStyles();




return(
    <React.Fragment>
        <div>
            <div>
                <CssBaseline/>
                <AppBar position = "fixed" color="primary">
                    <Toolbar>
                        <IconButton color = "inherit" edge = "start">
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
                    <Grid cntainer justify = "center">
                        <Card className = {classes.card}>
                            <div>
                            <CardContent>
                                <TextField variant = "outlined"/>
                                <Button variant = "contained" color = "#1976d2" className = {classes.button}></Button>
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
    Name: PropTypes.string.isRequired,
    Leader: PropTypes.string.isRequired,
    Members: PropTypes.string.isRequired
};


export default AddTeam;