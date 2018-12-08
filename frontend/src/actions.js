export const FETCH_ADDRESSES_SUCCESS = "FETCH_ADDRESSES_SUCCESS"
export const OPEN_FORM = "OPEN_FORM"
export const CLOSE_FORM = "CLOSE_FORM"
export const REMOVE_ADDRESS_SUCCESS = "REMOVE_ADDRESS"
export const SEARCH_ADDRESS_SUCCESS = "SEARCH_ADDRESS_SUCCESS"
export const SAVE_ADDRESS_SUCCESS = "SAVE_ADDRESS_SUCCESS"
export const UPDATE_ADDRESS_TO_EDIT = "UPDATE_ADDRESS_TO_EDIT"
export const FLUSH_AVAILABLE_ADDRESSES = "FLUSH_AVAILABLE_ADDRESSES"

export const openForm = payload => ({
  type: OPEN_FORM,
  payload
})

export const closeForm = () => ({
  type: CLOSE_FORM
})

export const fetchAddressesSuccess = payload => ({
  type: FETCH_ADDRESSES_SUCCESS,
  payload
})

export const removeAddressesSuccess = payload => ({
  type: REMOVE_ADDRESS_SUCCESS,
  payload
})

export const saveAddressSuccess = payload => ({
  type: SAVE_ADDRESS_SUCCESS,
  payload
})

export const searchAddressSuccess = payload => ({
  type: SEARCH_ADDRESS_SUCCESS,
  payload
})

export const updateAddressToEdit = payload => ({
  type: UPDATE_ADDRESS_TO_EDIT,
  payload
})

export const flushAvailableAddresses = payload => ({
  type: FLUSH_AVAILABLE_ADDRESSES,
  payload
})

export const fetchAddresses = () => dispatch => {
  return fetch(`/addresses`)
    .then(res => res.json())
    .then(result => dispatch(fetchAddressesSuccess(result)))
    .catch(error => {
      console.error(error)
    })
}

export const searchAddress = query => dispatch => {
  return fetch(`/search-address/${query}`)
    .then(res => res.json())
    .then(result => dispatch(searchAddressSuccess(result)))
}

export const removeAddresses = id => dispatch => {
  return fetch(`/addresses/${id}`, { method: "DELETE" })
    .then(res => res.json())
    .then(result => dispatch(removeAddressesSuccess(result)))
    .catch(error => {
      console.error(error)
    })
}

export const saveAddress = address => dispatch => {
  const method = address.id ? "PUT" : "POST";
  return fetch("/addresses", { method: method, body: JSON.stringify(address) })
    .then(res => res.json())
    .then(result => dispatch(saveAddressSuccess(result)))
    .catch(error => {
      console.error(error)
    })
}
