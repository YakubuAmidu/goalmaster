import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/App";
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";

ReactDOM.render(
  <Router path="/" history={browserHistory}>
<Route path="/app" components={App} />
 <Route path="/signin" components={SignIn} />
 <Route path="/signup" components={SignUp} />
  </Router>,
  document.getElementById("root"));
