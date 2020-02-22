import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
import {db} from './Firebase';
import {useState, useEffect}  from 'react';
import InfoWindow from 'react-google-maps/lib/components/InfoWindow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Places from './Places'


const useStyles = makeStyles( theme =>({
    

    appBar: {
        backgroundColor: '#1976d2'
    },

    card :{
        marginTop: 60
    }
}));



const WrappedMap = withScriptjs(withGoogleMap(props => (
    <GoogleMap defaultZoom = {13}
    defaultCenter = {{lat: -1.292066, lng : 36.821945}}>
          {props.positions.map(
              position => props.isMarkerShown && (
                  <Marker key = {position.id} position = {{ lat:position.Latitude, lng: position.Longitude}}>
                      <InfoWindow>
                          <div>
                              {position.Team} <br/>
                              <a href = "/Message">Message</a>
                          </div>
                      </InfoWindow>
                  </Marker>
              )
           )}
                  
    </GoogleMap>
)));




const Maps = (props) => 
 {

    const classes = useStyles();

    const [positions, setPosition] = useState([]) 

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    useEffect(() => {
        const unsub = db.collection('Location').onSnapshot (snapshot => {
            const allPositions = snapshot.docs.map(doc => ({
                id: doc.id,
                ... doc.data()
            }));
            setPosition(allPositions);
        })
        return () => {
            unsub();
        };
    }, [])
     
    return (
        <div>
             <div>
                <CssBaseline/>
                    <AppBar position = "fixed" color = "primary" className = {classes.appBar}>
                    <Toolbar>
                        <IconButton color = "inherit" edge = "start" onClick={() => props.history.goBack()}>
                            <KeyboardArrowLeftRounded/>
                         </IconButton>
                            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                        Search 
                            </Button>
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Search</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                    Enter the name of the location to search for the closest team.
                                </DialogContentText>
                                        <div>
                                        <Places/>
                                        </div>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleClose} color="primary">
                                    Subscribe
                                </Button>
                                </DialogActions>
                             </Dialog>
                     </Toolbar>
                    </AppBar>
            </div>
            <div>
                <Card className = {classes.card}>
                    <CardContent>
                        <div style = {{width: "97vw", height: "90vh"}}> 
                            <WrappedMap
                            isMarkerShown
                            positions = {positions}
<<<<<<< HEAD
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
=======
>>>>>>> 6685e550004016d0aa9b7246ddae76d67fbc5d6e
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};


export default Maps;
