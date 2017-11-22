import React from "react";
import { BrowserRouter as Router, Route, browserHistory, Redirect} from "react-router-dom";
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';


const Main = () => (

  <Router history={browserHistory} >
  <div>
    <Base >
      <Route exact path="/"  render={() => 
        (Auth.isUserAuthenticated() ? (<Redirect to="/dashboard"/>) : (<HomePage/>))}/>
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/logout"  render={ () => {
        Auth.deauthenticateUser()
        return <Redirect to="/"/>
      }}/>
    </Base>
  </div>
  </Router>
)



export default Main;