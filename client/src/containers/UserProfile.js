import React from "react";
import Image from '../components/Image.jsx';
import axios from "axios";
import Auth from "../modules/Auth"
import { Container, Button, Form, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import './userprofile.css';


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
    xhr.open('get', '/api/members/'+currentId);
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
        <form ref='uploadForm' 
          id='uploadForm'
          action = '/upload' 
          method='post' 
          encType="multipart/form-data"
          onSubmit= {this.processUpload}>
            <input type="file" name="sampleFile"/>
            <input type= "hidden" name= "id" value={localStorage.getItem('id')}/>
            <input type= "hidden" name= "name" value={localStorage.getItem('name')}/>
            <input type='submit' value='Upload!' id="upload"/>
        </form> 
        <Image />
        <p>
          
        </p>
    </div>
    );
  }
}

  

export default UserProfile;



