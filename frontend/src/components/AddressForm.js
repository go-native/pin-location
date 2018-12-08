import React, { Component } from "react"
import Autosuggest from "react-autosuggest"

const getSuggestionValue = suggestion => suggestion.address
const renderSuggestion = suggestion => <div>{suggestion.address}</div>

const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

class AddressForm extends Component {
  state = this.props.addressToEdit ? {...this.props.addressToEdit}
    : { title: "", address: "" }
  submitForm = event => {
    event.preventDefault()
    this.isFormValid() && this.props.onSaveAddress(this.state)
  }
  debounceSearchAddress = debounce(value => {
    this.props.onSearchAddress(value);
  }, 500)
  onSuggestionsFetchRequested = e => {
    this.debounceSearchAddress(e.value);
  }
  onSuggestionsClearRequested = () => {
    this.props.onFlushAvailableAddresses();
  }
  onAddressChange = (event, { newValue }) => {
    this.setState({
      address: newValue,
      lat: null,
      lng: null
    })
  }
  handleTitleChange = event => {
    this.setState({title: event.target.value})
  }
  onSuggestionSelected = (event, { suggestion }) => {
    this.setState({...suggestion})
  }
  isFormValid() {
    return this.state.title.trim().length !== 0 && this.state.address.trim().length !== 0
      && this.state.lat && this.state.lng
  }
  render() {
    const inputProps = {
      placeholder: "Query geocoding API",
      value: this.state.address,
      onChange: this.onAddressChange
    }
    return (
      <form className="form" onSubmit={this.submitForm}>
        <div className="label">Title:</div>
        <input
          type="text"
          className="text_field"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <div className="label">Address:</div>
        <Autosuggest
          suggestions={this.props.availableAddresses}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
        />
        {this.state.lat && this.state.lng && (
          <div className="label">
            Latitude: {this.state.lat} / Longitude: {this.state.lng}
          </div>
        )}
        <br />
        <div>
          <input className="action-btn save-btn" type="submit" value="Submit"  disabled={!this.isFormValid()}/>
          <button
            className="action-btn cancel-btn"
            onClick={this.props.onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default AddressForm
