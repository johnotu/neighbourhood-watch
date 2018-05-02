import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

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
        <Marker position={{lat: this.state.currentLocation.lat, lng:  this.state.currentLocation.lng}} />  
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