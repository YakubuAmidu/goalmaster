import React, { Component } from "react";

class AddGoal extends Component{
  render(){
    return(
      <div className="form-inline">
        <div className="form-group">
        <input
        type="text"
        placeholder="Add a goal"
        className="form-control"
        style={{ marginRight: "5%" }}
        />
        <button
        type="button"
        className="btn btn-success"
        >
        submit
        </button>
        </div>
      </div>
    );
  };
}

export default AddGoal;
