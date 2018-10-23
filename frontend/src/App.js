import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


import NavbarContainer from './components/layout/navbar_container';
import Footer from './components/layout/footer';
import Homepage from './components/layout/homepage';
import Signup from './components/session/signup';
import Login from './components/session/login';
import jwt_decode from 'jwt-decode';
import setAuthToken from './util/set_auth_token';
import { receiveCurrentUser, logoutUser } from './action/session_actions';
import './App.css';
import store from './store/store';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(receiveCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // TODO: Clear other related state
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return <Provider store={store}>
        <Router>
          <div className="App">        
            <NavbarContainer />
            <Switch>
              <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
              <Route exact path="/" component={Homepage} />
            </Switch> 
            <Footer />
          </div>
        </Router>
      </Provider>;
  }
}

export default App;

/* <SignupContainer />
<LoginContainer /> */