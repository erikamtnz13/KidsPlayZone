import React from "react";
import { Container, Button, Form, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import Image from '../components/Image.jsx'
import './userprofile.css';


class UserProfile extends React.Component {
  constructor(){
    super()
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



