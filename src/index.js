import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { firebaseApp } from "./firebase";

import App from "./components/App";
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
  console.log("user has signed in or up", user);
  browserHistory.push("/App");
}else {
  console.log("user has signed out or still needs to sign in.");
  browserHistory.replace("/signIn");
}
})

ReactDOM.render(
  <Router path="/" history={browserHistory}>
<Route path="/app" components={App} />
 <Route path="/signin" components={SignIn} />
 <Route path="/signup" components={SignUp} />
  </Router>,
  document.getElementById("root"));
