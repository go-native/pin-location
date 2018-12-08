import React, { Component } from "react"
import { connect } from "react-redux"
import AddressList from "../components/AddressList"
import { fetchAddresses, openForm, removeAddresses } from "../actions"

class AddressListContainer extends Component {
  componentDidMount() {
    this.props.fetchAddresses();
  }
  render() {
    return <AddressList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    addresses: state.addresses
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAddresses: () => dispatch(fetchAddresses()),
    onEdit: address => dispatch(openForm(address)),
    onEemove: id => dispatch(removeAddresses(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressListContainer)
