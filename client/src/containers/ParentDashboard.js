import React from "react";
import { BrowserRouter as Router, Route, browserHistory, Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import ParentAuth from '../modules/ParentAuth'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import LandingPage from './LandingPage/LandingPage'


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
        <h3>Members</h3>
        <button><Link to="/parentlogout">Log Out</Link></button>
        <Row>
          <Col md="4">
            {members.map(members =>
              <Card>
                <CardBody>
                  <CardTitle key={members.name}>{members.name}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button> 
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
        <Route exact path='/parentlogout'  render={ () => {
          console.log(ParentAuth)
          ParentAuth.deauthenticateUser()
          window.location.replace('/')  
        }}/>
      </div>
    </Router>
    )
  }
}
  

export default Members;
