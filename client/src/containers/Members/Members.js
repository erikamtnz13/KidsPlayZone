import React from 'react';
import Auth from '../../modules/Auth'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './members.css';
import profileIcon from '../../imgs/profile-icon.png';

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
    xhr.open('get', '/api/members');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
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
      <div>
        <h3 className="tabTitle">Members</h3>
        <Row>
          {members.map(members =>
            <Col xs="12" md="4">
              <Card>
                <CardBody>
                  <CardImg className="membersImage" src =  {(members.img === 'placeholder') ? members.img &&  profileIcon : members.img && require("../../../../server/kidsPictures" + members.img)}></CardImg>
                  {/* <img src =  {(members.img === 'placeholder') ? members.img &&  profileIcon : members.img && require("../../../../server/kidsPictures" + members.img)} /> */}
                  <CardTitle className="memberNames" key={members.name}>{members.name}</CardTitle>
                  {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>
      </div>
    )
  }
}
  

export default Members;
