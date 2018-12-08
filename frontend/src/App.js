import React, { Component } from "react"
import { Provider } from "react-redux"
import { store } from "./store"
import AddressListContainer from "./containers/AddressList"
import AddressFormContainer from "./containers/AddressForm"
import HeaderContainer from "./containers/Header"
import MapContainer from "./containers/Map"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="container">
            <MapContainer />
          </div>
          <div className="container">
            <HeaderContainer />
            <div className="body">
              <AddressListContainer />
            </div>
          </div>
          <AddressFormContainer />
        </div>
      </Provider>
    )
  }
}

export default App
