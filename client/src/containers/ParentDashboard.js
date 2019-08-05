import React from "react";
import { BrowserRouter as Router, Route, browserHistory, Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import ParentAuth from '../modules/ParentAuth'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import LandingPage from './LandingPage/LandingPage'
import profileIcon from '../imgs/profile-icon.png'
import './parentDashboard.css'


class Members extends React.Component{

  constructor(){
    super()
    this.state = {
      membersMessage: '',
      members: []
    }
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/parentapi/members');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${ParentAuth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          members: xhr.response.message
        });
        console.log(this.state.members)
      }
    });
    xhr.send();
  }

  render(){
    let members = this.state.members
    return (
      <Router history={browserHistory} >
      <div>
        <Container>
          <h3 className="tabTitle">Members</h3>
          <Row>
            <Button color="warning" id="parentLogoutBtn"><Link to="/parentlogout">Log Out</Link></Button>
          </Row>
          <Row>
            {members.map(members =>
              <Col xs="12" md="4">  
                <Card>
                  <CardBody>
                  <CardImg className="membersImage" src =  {(members.img === 'placeholder') ? members.img &&  profileIcon : members.img && require("../../../server/kidsPictures" + members.img)}></CardImg>
                    <CardTitle className="memberNames" key={members.name}>{members.name}</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </Card>
              </Col>
            )}
          </Row>
          <Route exact path='/parentlogout'  render={ () => {
            console.log(ParentAuth)
            ParentAuth.deauthenticateUser()
            window.location.replace('/')  
          }}/>
        </Container>
      </div>
    </Router>
    )
  }
}
  

export default Members;
