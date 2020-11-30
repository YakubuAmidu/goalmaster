import React, { Component } from "react";
import { completeGoalRef } from "../firebase";

class CompleteGoalList extends Component{
  componentDidMount(){
    completeGoalRef.on("value", snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      })
      console.log("completeGoals", completeGoals);
    })
  }

  render(){
    return(
      <div>
        <h1>CompleteGoalList</h1>
      </div>
    )
  }
}

export default CompleteGoalList;
