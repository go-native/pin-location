import React from "react"
import AddressDetails from "./AddressDetails"

const AddressList = ({ addresses, onEdit, onRemove }) =>
  addresses.map(address => (
    <AddressDetails
      key={address.title}
      address={address}
      onEdit={onEdit}
      onRemove={onRemove}
    />
  ));

export default AddressList
