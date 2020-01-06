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


const useStyles = makeStyles( theme =>({
    

    appBar: {
        backgroundColor: '#1976d2'
    },

    card :{
        marginTop: 60
    }
}));



class MarkerPureComponent extends React.PureComponent {
    render () {
        return (
            <Marker position = {this.props.position}></Marker>
        )
    }
}


class InfoWindowPureComponent extends React.PureComponent {
    render() {
        const {children} = this.props;
        console.log(children)
        return (
            <InfoWindow defaultPosition = {this.props.defaultPosition}>{this.props.children}</InfoWindow>
        )
    }
}






const WrappedMap = withScriptjs(withGoogleMap(props => (
    <GoogleMap defaultZoom = {13}
    defaultCenter = {{lat: -1.292066, lng : 36.821945}}>
          {props.positions.map(
              position => props.isMarkerShown && (
                  <MarkerPureComponent
                  key = {position.id}
                  position = {{ lat:position.Latitude, lng: position.Longitude}}>
                  </MarkerPureComponent>
              )
           )}

           {
               props.positions.map(
                   position => props.isMarkerShown && (
                       <InfoWindowPureComponent key = {position.id} defaultPosition = {{lat: position.Latitude, lng: position.Longitude}}>
                            <div>
                                {position.Team} <br/>
                                < a href = "/Nav">Message</a>
                            </div>
                       </InfoWindowPureComponent>
                   )
               )
           }
                  
    </GoogleMap>
)));




const Maps = (props) => 
 {

    const classes = useStyles();

    const [positions, setPosition] = useState([]) 

    
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
