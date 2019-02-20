import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AuthRoute, ProtectedRoute } from './util/route_util';
import DashBoardContainer from './components/dashboard/dashboard_container';
import Signup from './components/session/login_container';
import Login from './components/session/signup_container';
import jwt_decode from 'jwt-decode';
import setAuthToken from './util/set_auth_token';
import { receiveCurrentUser, logoutUser } from './action/session_actions';
import store from './store/store';
import Redirect from 'react-router-dom/Redirect';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(receiveCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/signup" component={Signup} />
              <ProtectedRoute exact path="/" component={DashBoardContainer} />
              <Redirect to="/login" />
            </Switch>
          </div>
        </Router>
      </Provider>;
  }
}

export default App;
