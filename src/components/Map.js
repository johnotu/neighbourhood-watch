import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const incidents = [
  { id: 0, latAdd: 0.010029, lngAdd: 0.010031 },
  { id: 1, latAdd: 0.000023, lngAdd: 0.000054 },
  { id: 2, latAdd: 0.020098, lngAdd: 0.000064 },
  { id: 3, latAdd: -0.031263, lngAdd: -0.010055 },
];

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 40.756795,
        lng: -73.954298
      },
      displayIncident: false
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

  incidentClick(incident) {
    this.setState({displayIncident: !this.state.displayIncident})
    console.log('an incident has been clicked: ', incident);
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng }}
        defaultZoom={13}
      > 
        {incidents.map(incident => (
          <Marker
            key={incident.id}
            position={{ lat: incident.latAdd + this.state.currentLocation.lat, lng: incident.lngAdd + this.state.currentLocation.lng }}
            onClick={() => this.incidentClick(incident)}
          />
        ))}
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `76vh`, width: '96vw' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
};

export default Map;