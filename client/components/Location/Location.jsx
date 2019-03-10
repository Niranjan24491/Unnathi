import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import "./Location.scss";

export class Location extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        initialCenter={{
          lat: 13.032550,
          lng: 77.576605
        }}
      >
        <Marker name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBoPkffwUghwdmxB46TFvm44gZGXRxSZ6I&libraries=places"
})(Location);
