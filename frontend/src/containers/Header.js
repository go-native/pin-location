import React from "react"
import { connect } from "react-redux"
import { openForm } from "../actions"

const HeaderContainer = ({ openForm }) => {
  return (
    <div className="header">
      <button className="btn-add" onClick={openForm}>
        Add Address
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openForm: () => dispatch(openForm())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer)
