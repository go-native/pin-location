import { reducer } from './reducer'
import * as types from './actions'

const addresses = [{
  id: "1544109127653",
  title: "Leipziger str.",
  address: "Leipziger strasse",
  lat: 52.511123,
  lng: 13.399605
},{
  id: "1544109127654",
  title: "Spandauer str.",
  address: "Spandauer strasse",
  lat: 52.511144,
  lng: 13.399655
}]

const newAddress = {
  id: "1544109127698",
  title: "Another str.",
  address: "Another strasse",
  lat: 52.511144,
  lng: 13.399655
}

const initialState = {
  addresses: [],
  availableAddresses: [],
  isFormOpened: false,
  addressToEdit: null
}

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual( {
      addresses: [],
      availableAddresses: [],
      isFormOpened: false,
      addressToEdit: null
    })
  })
  it('should handle FETCH_ADDRESSES_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_ADDRESSES_SUCCESS,
        payload: addresses
      })
    ).toEqual({
        ...initialState,
        addresses: addresses,
      })
  })
  it('should handle OPEN_FORM', () => {
    expect(
      reducer(undefined, {
        type: types.OPEN_FORM,
        payload: addresses[0]
      })
    ).toEqual({
        ...initialState,
        isFormOpened: true,
        addressToEdit: addresses[0]
      })
  })

  it('should handle SAVE_ADDRESS_SUCCESS', () => {
    expect(
      reducer({...initialState, addresses: addresses}, {
        type: types.SAVE_ADDRESS_SUCCESS,
        payload: newAddress
      })
    ).toEqual({
        ...initialState,
        addresses: [...addresses, newAddress]
      })
  })

  // ...,etc.
})