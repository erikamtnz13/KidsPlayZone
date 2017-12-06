import React from "react";
import { Container, Button, Form, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import Image from '../components/Image.jsx'
import './userprofile.css';


class UserProfile extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){
    var currentId = localStorage.getItem('id')
    console.log(currentId)
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/members/'+currentId);
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

  render() {
    return (
      <div>
        <Container>
          <h3 class="tabTitle">User Profile</h3>
          <Row>
            <Image />
            <FormGroup>
              <Label for="file" className="profile-text">Upload Profile Photo</Label>
              <Input type="file" name="file" id="file" />
            </FormGroup>
            <FormGroup>
              <Label for="text" className="profile-text">Bio</Label>
              <Input type="textarea" name="text" id="bio-text" className="profile-text" />
            </FormGroup>
            <Button color="primary">Save</Button>
          </Row>
        </Container>
      </div>
    )
  }
}

  

export default UserProfile;



