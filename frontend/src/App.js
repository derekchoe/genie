import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavbarContainer from './components/layout/navbar_container';
import Footer from './components/layout/footer';
import Homepage from './components/layout/homepage';
import SignupContainer from './components/session/signup_container';
import LoginContainer from './components/session/login_container';
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
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavbarContainer />
            <Route exact path="/" component={Homepage} />
            <SignupContainer />
            <LoginContainer />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
