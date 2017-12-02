import React from "react";
import { Container, Button, Form, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import Image from '../components/Image.jsx'


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
              <Label for="exampleFile">Upload Profile Photo</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Bio</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button color="primary">Save</Button>
          </Row>
        </Container>
      </div>
    )
  }
}

  

export default UserProfile;



