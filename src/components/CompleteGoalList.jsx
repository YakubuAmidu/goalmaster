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
        {
          this.completeGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <div key={index}>
               <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }

        clearCompleted(){
          completeGoalRef.set([])
        }

        <button
        className="btn btn-primary"
        onClick={() => this.clearCompleted()}
        >
        Clear all
        </button>
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
