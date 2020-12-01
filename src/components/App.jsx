

import React from 'react';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import { firebaseApp } from '../firebase';

function signOut() {
  firebaseApp.auth().signOut();
}

const App = () => (
    <div style={{padding: '5%'}}>
      <h3>Goal Coach</h3>
      <AddGoal />
      <hr />
      <h4>Goals</h4>
      <GoalList />
      <hr />
      <h4>Completed Goals</h4>
      <CompleteGoalList />
      <hr />
      <button onClick={() => signOut()} className="btn btn-danger">Sign Out</button>
    </div>
)

export default App










// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { firebaseApp } from "../firebase";
// import AddGoal from "./AddGoal";
// import GoalList from "./GoalList";
// import CompleteGoalList from "./CompleteGoalList";
//
// class App extends Component {
//     signOut(){
//       firebaseApp.auth().signOut();
//     }
//
//   render(){
//     return (
//       <div style={{ margin: "5px" }}>
//       <h3>Goals Master</h3>
//       <AddGoal />
//       <hr />
//       <h4>Goals</h4>
//       <GoalList />
//       <hr />
//       <h4>Complete Goals</h4>
//       <CompleteGoalList />
//       <hr />
//       <button
//       className="btn btn-danger"
//       onClick={() => this.signOut()}
//       >
//       Sign out
//       </button>
//       </div>
//     )
//   };
// };
//
// function mapStateToProps(state){
//   // console.log("state", state);
//   return {}
// }
//
// export default connect(mapStateToProps, null)(App);
