import React from "react";
import { BrowserRouter as Router, Route, browserHistory, Redirect} from "react-router-dom";
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';

import LandingPage from './containers/LandingPage/LandingPage'


const Main = () => (

  <Router history={browserHistory} >
  <div>
      <Route exact path="/"  render={() => 
        (Auth.isUserAuthenticated() ? (<Redirect to="/dashboard"/>) : (<LandingPage/>))}/>
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
  </div>
  </Router>
)



export default Main;