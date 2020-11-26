import React, { Component } from 'react';

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
       />
       <input
       className="form-control"
       type="password"
       placeholder="password"
       />
       <button
       className="btn btn-primary"
       type="button"
       >
       SignIn
       </button>
       </div>
      </div>
    )
  }
}

export default SignIn;
