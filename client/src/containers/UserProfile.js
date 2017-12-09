import React from "react";
import Image from '../components/Image.jsx';
import axios from "axios";
import Auth from "../modules/Auth"
import { Container, Button, Form, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import './userprofile.css';
import profileIcon from '../imgs/profile-icon.png';


class UserProfile extends React.Component {
  constructor(){
    super()
    this.state = {
      kid:{}
    }
  }
  componentDidMount(){
    var currentId = localStorage.getItem('id')
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/members/'+ currentId);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log('success')
        this.setState({
          kid: xhr.response.message
        });
        console.log(this.state.kid)
      }
    });
    xhr.send();

  }

  render() {
    return (
      <div className="container">
        <h3 className="tabTitle">User Profile</h3>
        <div className="flex-container">
        <img className="userImage" src =  {(this.state.kid.img === 'placeholder') ? this.state.kid.img &&  profileIcon : this.state.kid.img && require("../../../server/kidsPictures" + this.state.kid.img)} />
        </div>
        <Form ref='uploadForm' 
          id='uploadForm'
          className="flex-container"
          action = '/upload' 
          method='post' 
          encType="multipart/form-data"
          onSubmit= {this.processUpload}>
            <input type="file" name="sampleFile" id="imageMessage"/>
            <input type= "hidden" name= "id" value={localStorage.getItem('id')}/>
            <input type= "hidden" name= "name" value={localStorage.getItem('name')}/>
            <input type='submit' value='Upload!' id="upload"/>
        </Form>
        <FormGroup>
          <Row className="justify-content-md-center">
            <Label for="bio" id="bioLabel">Bio</Label>
          </Row>
          <Row className="justify-content-md-center">
            <Input type="textarea" className="form-control col-md-6" id="bioTextArea" placeholder="Write something here"></Input>
          </Row>
          <Row>
            <Button className="col-md-6" id="profileSubmitBtn" color="warning">Save</Button>
          </Row>
        </FormGroup> 
      </div>
    );
  }
}

  

export default UserProfile;



