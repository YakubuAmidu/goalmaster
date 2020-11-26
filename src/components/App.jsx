import React, { Component } from "react";
import { firebaseApp } from "../firebase";

class App extends Component {
    signOut(){
      console.log("this.state", this.state);
      firebaseApp.auth().signOut();
    }

  render(){
    return (
      <div>
      <h1>Apps</h1>
      <button
      className="btn btn-danger"
      onClick={() => this.signOut()}
      >
      Sign out
      </button>
      </div>
    )
  };
};

export default App;
