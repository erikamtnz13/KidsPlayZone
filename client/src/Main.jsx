import React from "react";
import { BrowserRouter as Router, Route, browserHistory, Redirect} from "react-router-dom";
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Jumbotron from "./components/Jumbotron"
import Navpills from "./components/Navpills.jsx";
import Members from "./containers/Members";
import Profile from "./containers/UserProfile";
import Games from "./containers/Games/Games";
import Videos from "./containers/Videos/Videos";
import Auth from './modules/Auth';

import LandingPage from './containers/LandingPage/LandingPage'


const Main = () => (

  <Router history={browserHistory} >
  <div>
    <Base >
      {/* {Auth.isUserAuthenticated() ? (
        <DashboardPage />
      ) : (
        <HomePage />
      )} */}
      <Route exact path="/"  render={() => 
        (Auth.isUserAuthenticated() ? (<Redirect to="/dashboard"/>) : (<LandingPage/>))}/>
      {/* <Route exact path="/home"  render={() => 
        (Auth.isUserAuthenticated() ? (<Redirect to="/dashboard"/>) : (<LandingPage/>))}/> */}
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      {/* <Route exact path="/profile" component={Profile} />
      <Route exact path="/members" component={Members} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/videos" component={Videos} /> */}
      <Route exact path="/logout"  render={ () => {
        Auth.deauthenticateUser()
        return <Redirect to="/"/>
      }}/>
    </Base>
  </div>
  </Router>
)



export default Main;