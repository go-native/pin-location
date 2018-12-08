import {
  FETCH_ADDRESSES_SUCCESS,
  OPEN_FORM,
  CLOSE_FORM,
  REMOVE_ADDRESS_SUCCESS,
  SEARCH_ADDRESS_SUCCESS,
  SAVE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_TO_EDIT,
  FLUSH_AVAILABLE_ADDRESSES
} from "./actions"

const initialState = {
  addresses: [],
  availableAddresses: [],
  isFormOpened: false,
  addressToEdit: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESSES_SUCCESS:
      return { ...state, addresses: action.payload }
    case OPEN_FORM:
      return { ...state, isFormOpened: true, addressToEdit: action.payload }
    case CLOSE_FORM:
      return { ...state, isFormOpened: false }
    case REMOVE_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: state.addresses.filter(a => a.id !== action.payload.id)
      }
    case SEARCH_ADDRESS_SUCCESS:
      return { ...state, availableAddresses: action.payload }
    case UPDATE_ADDRESS_TO_EDIT:
      return { ...state, addressToEdit: action.payload }
    case SAVE_ADDRESS_SUCCESS: {
      let addressToEdit = state.addresses.find(a => action.payload.id === a.id)
      if (addressToEdit) {
        return {
          ...state,
          addressToEdit: null,
          isFormOpened: false,
          addresses: [
            ...state.addresses.map(a => {
              return a === addressToEdit ? action.payload : a
            })
          ]
        }
      }
      return {
        ...state,
        isFormOpened: false,
        addressToEdit: null,
        addresses: [...state.addresses, action.payload]
      }
    }
    case FLUSH_AVAILABLE_ADDRESSES:
      return { ...state, availableAddresses: [] }
    default:
      return state
  }
}
