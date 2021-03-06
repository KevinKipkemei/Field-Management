import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import {db} from './Firebase';
import {useEffect} from 'react';
import axios from 'axios';

export default function Places() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
    travelMode: "DRIVING"
  });

  const [destination, setDestinations] = React.useState([]);


  let origins = [(coordinates.lat), (coordinates.lng)]
  let travelMode = (coordinates.travelMode)
  
  let destinations = destination.map(
    position => {
      return  [(position.Latitude), (position.Longitude)]
    }
  )



  var distance = require('react-native-google-matrix');

  distance.apiKey = (process.env.REACT_APP_GOOGLE_KEY)
 
distance.get(
  {
    origin: '-7.841879,110.409193',
    destination: '-7.741194,110.342588'
  },
  function(err, data) {
    if (err) return console.log(err);
    console.log(data);
});



  useEffect(() => {
    const unsub = db.collection('Location').onSnapshot (snapshot => {
        const allPositions = snapshot.docs.map(doc => ({
            id: doc.id,
            ... doc.data()
        }));
        setDestinations(allPositions);
    })
    return () => {
        unsub();
    };
}, [])

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);

  };
  
  console.log (destinations)

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}