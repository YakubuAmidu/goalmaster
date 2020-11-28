import React, { Component } from "react";
import { goalRef } from "../firebase";

class GoalList extends Component {
 componentDidMount(){
   goalRef.on("value", snap => {
     let goals = [];
     snap.forEach(goal => {
       let goalObject = goal.val();
       console.log("goalObject", goalObject);
       const { email, title } = goal.val();
       goals.push({ email, title });
     })
     console.log("goals", goals);
   })
 }

  render(){
    return (
      <div>GoalList</div>
    )
  }
}

export default GoalList;
