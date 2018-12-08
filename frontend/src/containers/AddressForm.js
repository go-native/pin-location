import React, { Component } from "react"
import { connect } from "react-redux"
import AddressForm from "../components/AddressForm"
import {
  closeForm,
  searchAddress,
  saveAddress,
  flushAvailableAddresses
} from "../actions"

class AddressFormContainer extends Component {
  render() {
    return (
      <div className={`side-container ${this.props.isFormOpened && "side-container--open"}`}>
        {this.props.isFormOpened && <AddressForm {...this.props} />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFormOpened: state.isFormOpened,
    availableAddresses: state.availableAddresses,
    addressToEdit: state.addressToEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCancel: () => dispatch(closeForm()),
    onSearchAddress: name => dispatch(searchAddress(name)),
    onFlushAvailableAddresses: () => dispatch(flushAvailableAddresses()),
    onSaveAddress: address => dispatch(saveAddress(address))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressFormContainer)
