import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const incidents = [
  { id: 0, latAdd: 0.010029, lngAdd: 0.010031 },
  { id: 1, latAdd: 0.000023, lngAdd: 0.000054 },
  { id: 2, latAdd: 0.020098, lngAdd: 0.000064 },
  { id: 3, latAdd: 0.023163, lngAdd: 0.010055 },
];

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 40.756795,
        lng: -73.954298
      }
    }
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        })
      })
    }
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng }}
        defaultZoom={13}
      > 
        {console.log(incidents, this.state.currentLocation)}
        {incidents.map(incident => (
          <Marker
            key={incident.id}
            position={{ lat: incident.latAdd + this.state.currentLocation.lat, lng: incident.lngAdd + this.state.currentLocation.lng }} />
        ))}
        {/* <Marker key={0} position={{ lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng }} /> 
        <Marker key={1} position={{ lat: this.state.currentLocation.lat + 0.020611, lng: this.state.currentLocation.lng + 0.020711 }} /> */}
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `100vh`, width: '100vw' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
};

export default Map;