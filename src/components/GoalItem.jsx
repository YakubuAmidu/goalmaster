import React, { Component } from "react";

class GoalItem extends Component {
     completedGoal(){
        // Add to complete goals on the database
        // remove this goal from the goals reference
     }

    render(){
        console.log("this.props.goal", this.props.goal);
        const { email, title } = this.props.goal;
        return(
            <div style={{ margin: "5px" }}>
              <strong>{title}</strong>
              <span style={{ marginRight: "5px" }}>Submitted by <em>{email}</em></span>
              <button 
              onClick={() => this.completedGoal()}
              className="btn btn-sm btn-primary"
              >complete</button>
            </div>
        )
    }
}

export default GoalItem;