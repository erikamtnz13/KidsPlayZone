import React from "react";
import Auth from '../modules/Auth'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  import './members.css';

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
        <h3 class="title">Members</h3>
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
      </div>
    )
  }
}
  

export default Members;
