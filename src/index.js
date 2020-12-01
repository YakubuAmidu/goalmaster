import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import App from './components/App';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
 if (user) {
   let {email, uid} = user;
   store.dispatch(logUser(email, uid)); // dispatches the logUser action to the reducers
   browserHistory.push('/app');
 } else {
   // handling logouts
   browserHistory.replace('/signin');
 }
})

ReactDOM.render(
 <Provider store={store}>
   <Router path="/" history={browserHistory}>
     <Route path="/signin" component={SignIn}/>
     <Route path="/signup" component={SignUp}/>
     <Route path="/app" component={App}/>
   </Router>
 </Provider>,
 document.getElementById('root')
)
