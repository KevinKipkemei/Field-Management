import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Charts from './Chart';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Pies from './Pie';


const useStyles = makeStyles({
    card:{
        marginTop: 28,
        height: 350,
        backgroundColor: '#263238'

    },

    secondcard:{
        // marginRight: 620,
        marginTop: 10,
        height: 280,
        width: 300,
        flex: 1,
        backgroundColor: '#263238'
    },

    thirdcard:{
        marginLeft: 10,
        marginTop: 10,
        height: 280,
        flex: 1,
        backgroundColor: '#263238'
    },

    title:{
        fontSize: 30,
        marginTop: 80,
        fontFamily: "Raleway",
        color: '#BDBDBD',
        fontWeight: 'bold'
    },

    button:{
        marginTop: 100,
        backgroundColor: '#1e88e5',
        width: 100
        
    },

    heading:{
          fontFamily: "Raleway",
          fontSize: 15,
          fontWeight: 'bold',
          color: '#BDBDBD'
    },

    flexheading:{
        fontFamily: "Raleway",
        fontSize: 15,
        fontWeight: 'bold',
        color: '#BDBDBD',
        // marginLeft: 50
    },

    flexcard:{
           marginLeft:50,
           marginTop: 20,
           width: 250,
           height: 300,
           backgroundColor: '#1976d2',
    },


    chart:{
        marginLeft: 70
    },

    avatar:{
     width: 70,
     height: 70,
     marginTop: 35,
     marginLeft: 70,
     marginBottom: 40
    },

});

const Cards = () =>{
    const classes= useStyles();

    return(
        <div>
        <div>
        <Card className={classes.card}>
            <div style = {{display: 'flex'}}>
            <CardContent>
                <Typography className={classes.heading}>
                    Team Summary <br/>
                    Overview
                </Typography>
                <Typography className={classes.title}>
                    Team One <br/>
                </Typography>
                <Button variant= "contained" className={classes.button}>
                      View
                </Button>
            </CardContent>
            <div>
                <Card className= {classes.flexcard}>
                <CardActionArea>
            <CardContent>
                <Typography align= "center" className = {classes.flexheading}>
                    Team Leader <br/>
                    Zlatan Ibrahimovic
                </Typography>
            <Avatar  src="./zlatan.jpg" className={classes.avatar}/>
            <Typography align= "center" className = {classes.flexheading}>
                    View Team Info
                </Typography>
            </CardContent>
            </CardActionArea>
         </Card>
            </div>
            <div>
                <CardContent style = {{display: 'flex'}} className= {classes.chart}>
                    <Charts/>
                </CardContent>
            </div>
            </div>
        </Card>
        </div>
        <div style={{display:'flex'}}>
        <Card className={classes.secondcard}>
            <CardContent>
            <Typography className={classes.heading}>
                Daily Tasks
            </Typography>            
            <Pies/>
            </CardContent>
        </Card>
        <Card className={classes.thirdcard}>
            <CardContent>
            <Typography className={classes.heading}>
                Latest Projects <br/>
                Team
            </Typography>           

            </CardContent>
        </Card>
        </div>
        </div>
   )
}



export default Cards;