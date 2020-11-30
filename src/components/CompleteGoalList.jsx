import React, { Component } from "react";
import { connect } from "react-redux";
import { setCompleted } from "../actions";
import { completeGoalRef } from "../firebase";

class CompleteGoalList extends Component{
  componentDidMount(){
    completeGoalRef.on("value", snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      })
      this.props.setCompleted(completeGoals);
    })
  }

  render(){
    console.log("this.props.completeGoals", this.props.completeGoals);

    return(
      <div>
        <h1>CompleteGoalList</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { completeGoals } = state;
  return{
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
