import React from "react"

const AddressDetails = ({ address, onEdit, onRemove }) => {
  return (
    <div className="address_container">
      <div className="address_title">{address.title}</div>
      <div className="address_subtitle">{address.address}</div>
      <div className="address_subtitle">Latitude: {address.lat}</div>
      <div className="address_subtitle">Longitude: {address.lng}</div>
      <div className="address_actions">
        <button className="action-btn edit-btn" onClick={() => onEdit(address)}>
          Edit
        </button>
        <span className="separator">or</span>
        <button className="action-btn delete-btn" onClick={() => onRemove(address.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressDetails
