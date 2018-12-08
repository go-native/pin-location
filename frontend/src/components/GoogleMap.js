import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Google = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAIyiOIYzLHC1zAtUDITS8FeJ_I1NX_vc0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 52.511123, lng: 13.399605 }}
  >
    {props.addresses.map(address => <Marker key={address.address} position={{ lat: address.lat, lng: address.lng }} />)}
  </GoogleMap>
)

export default Google
