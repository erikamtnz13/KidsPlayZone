import React from 'react'
import { BrowserRouter as Router, Route, browserHistory, Redirect} from 'react-router-dom';
import Auth from '../modules/Auth'
import Dashboard from '../components/Dashboard.jsx'
import Navpills from '../components/Navpills/Navpills.jsx'
import Jumbotron from '../components/Jumbotron'
import Members from './Members/Members';
import Profile from './UserProfile';
import HomePage from './HomePage';
import Games from './Games/Games';
import Videos from './Videos/Videos';
import LandingPage from './LandingPage/LandingPage'

import './dashboard.css';



class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (
    <Router history={browserHistory} >
      <div>
        <Jumbotron />
        <Navpills >
          <Route exact path='/'  render={() => 
            (Auth.isUserAuthenticated() ? (<Redirect to='/dashboard'/>) : (<LandingPage/>))}/>
          <Route exact path='/home' component={HomePage} />  
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/members' component={Members} />
          <Route exact path='/games' component={Games} />
          <Route exact path='/videos' component={Videos} />
          <Route exact path='/logout'  render={ () => {
            Auth.deauthenticateUser()
            window.location.replace('/')  
          }}/>
      </Navpills>
      </div>
      </Router>
    
    )
  }

}

export default DashboardPage;
