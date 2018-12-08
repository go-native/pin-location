import React from "react"
import { connect } from "react-redux"
import GoogleMap from "../components/GoogleMap"

const MapContainer = ({ addresses }) => <GoogleMap addresses={addresses} />

const mapStateToProps = (state, ownProps) => {
  return {
    addresses: state.addresses
  }
}

export default connect(mapStateToProps)(MapContainer)
