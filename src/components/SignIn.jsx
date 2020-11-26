import React, { Component } from 'react';
import { firebaseApp } from "../firebase";

class SignIn extends Component {
   constructor(props){
     super(props);
     this.state = {
       email: " ",
       password: " ",
       error: {
         message: " "
       }
     }
   }

   signIn(){
     console.log("this.state", this.state);

     const { email, password } = this.state;
     firebaseApp.auth().signInWithEmailAndPassword(email, password)
     .catch(error => {
       this.setState({error});
     })
   }

  render(){
    return (
      <div className="form-inline">
       <h1>SignIn</h1>
       <div className="form-group">
       <input
       className="form-control"
       type="text"
       placeholder="email"
       onChange={(event) => this.setState({ email: event.target.value })}
       />
       <input
       className="form-control"
       type="password"
       placeholder="password"
       onChange={(event) => this.setState({ password: event.target.value })}
       />
       <button
       className="btn btn-primary"
       type="button"
       onClick={() => this.signIn()}
       >
       Sign In
       </button>
       </div>
      </div>
    )
  }
}

export default SignIn;
