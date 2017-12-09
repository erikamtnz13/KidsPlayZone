import React from "react";
import { BrowserRouter as Router, Route, browserHistory, Redirect} from "react-router-dom";
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import ParentLogin from './containers/ParentLogin';
import SignUpPage from './containers/SignUpPage.jsx';
import ParentDashboard from './containers/ParentDashboard'
import Auth from './modules/Auth';
import ParentAuth from './modules/ParentAuth'

import LandingPage from './containers/LandingPage/LandingPage'

const Main = () => (
  <Router history={browserHistory} > 
  <div>
      <Route exact path="/"  render={() => 
        (Auth.isUserAuthenticated() ? (<Redirect to="/dashboard"/>) : (<LandingPage/>))}/>
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/parent-login" component={ParentLogin} />
      <Route exact path="/parent" component={ParentDashboard} />
      <Route exact path="/dashboard" component={DashboardPage} />
      
  </div>
  </Router>
)



export default Main;