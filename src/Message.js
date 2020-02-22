import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import {db} from 'firebase';
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftOutlined'
import { CssBaseline, IconButton } from '@material-ui/core'


 
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

const Message = (props) => {

    const [message, setMessage] = useState({ recipient: '', textmessage: ''})

    const classes = useStyles();

    const sendText = () => {
        
        fetch(`http://127.0.0.1:4000/send-text?recipient=${message.recipient}&textmessage=${message.textmessage}`)
        .catch(err => console.error(err))
        console.log("Send Text is Running")
      }
    

      // console.log(message.recipient);
      // console.log(message.textmessage);



    return (
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
                    Send Message
                </Typography>
                <Grid>
                    <Grid container justify = "center">
                        <Card className = {classes.card}>
                            <div>
                            <CardContent>
                                <TextField value = {message.recipient} label = "Phone Number" variant = "outlined" margin = "normal" onChange={e => setMessage({...message, recipient: e.target.value})} fullWidth/>
                                <TextField value = {message.textmessage} multiline rows = {4} label = "Enter Text Message" variant = "outlined" onChange={e => setMessage({...message, textmessage: e.target.value })} fullWidth/>
                                <Button variant = "contained" className = {classes.button} onClick = {sendText}> Send Text</Button>
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

export default Message
