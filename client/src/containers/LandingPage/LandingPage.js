import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import MCEDLogo from './imgs/mced.png'
import leftImage from './imgs/left.png';
import middleImage from './imgs/middle.png';
import rightImage from './imgs/right.png';

import './style.css';
import './sec1.css';
import './sec2.css';
import './sec3.css';

import Auth from '../../modules/Auth'
import ParentAuth from '../../modules/ParentAuth'

 
class LandingPage extends Component {
    constructor(props, context) {
    super(props, context)
    this.state = {
      current: 0,
      modal: false,
      modal2: false,
      errors: {},
      user: {
          name: '',
          password: ''
      },
      parent: {
        parentEmail: '',
        parentPassword: ''
    }
    };

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);

    this.onSignupSubmit = this.onSignupSubmit.bind(this)
    this.onLoginSubmit =  this.onLoginSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)

    this.onParentSignup = this.onParentSignup.bind(this)
    this.onParentLogin =  this.onParentLogin.bind(this)
    this.onParentInput = this.onParentInput.bind(this)
  

    }

    componentDidMount () {
        window.scrollTo(0, 0)
      }
    

    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }

    toggle2() {
        this.setState({
        modal2: !this.state.modal2
        });
    }

    //Handle sign up
    onSignupSubmit(event) {
        event.preventDefault()
        console.log(this.state.user.name, this.state.user.password)
        
        // create a string for an HTTP body message
        const name = encodeURIComponent(this.state.user.name);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `name=${name}&password=${password}`;

        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/signup');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            // success
            console.log('you successfully signed up')
            // change the component-container state
            this.setState({
            errors: {}
            });

            // set a message
            localStorage.setItem('successMessage', xhr.response.message);

            // make a redirect
            this.context.router.history.push('/login');
        
        
            console.log(this.context)
        
        } else {
            // failure

            const errors = xhr.response.errors ? xhr.response.errors : {};
            errors.summary = xhr.response.message;

            this.setState({
            errors
            });
            console.log(this.state.errors)
        }
        });
        xhr.send(formData);
    }

    //Handle Login/Signup Input Change
    onInputChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
    
        this.setState({
          user
        });
       
    }

    ///Handling Login
    onLoginSubmit(event){
            // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    console.log("is parent authenticated "+ParentAuth.isUserAuthenticated())
        // create a string for an HTTP body message
        const name = encodeURIComponent(this.state.user.name);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `name=${name}&password=${password}`;
    
        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            // success
            console.log(xhr.response.message)
            console.log(xhr.response.kid)
            // change the component-container state
            this.setState({
              errors: {}
            });
    
            // save the token
            Auth.authenticateUser(xhr.response);
                // change the current URL to /
            this.context.router.history.push('/');
            // window.location.replace('/') 
          } else {
            // failure
    
            // change the component state
            const errors = xhr.response.errors ? xhr.response.errors : {};
            errors.summary = xhr.response.message;
    
            this.setState({
              errors
            });

            console.log(this.state.errors)
          }
        });
        xhr.send(formData);
    }

    //////////////Parents form handling///////////////////
     //Handle parent sign up
     onParentSignup(event) {
        event.preventDefault()
        console.log(this.state.parent.parentEmail, this.state.parent.parentPassword)
        
        // create a string for an HTTP body message
        const parentEmail = encodeURIComponent(this.state.parent.parentEmail);
        const parentPassword = encodeURIComponent(this.state.parent.parentPassword);
        const formData = `email=${parentEmail}&password=${parentPassword}`;

        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/parent-auth/signup');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            // success
            console.log('you successfully signed up')
            // change the component-container state
            this.setState({
            errors: {}
            });

            // set a message
            localStorage.setItem('successMessage', xhr.response.message);

            // make a redirect
            this.context.router.history.push('/parent-login');
        
        } else {
            // failure

            const errors = xhr.response.errors ? xhr.response.errors : {};
            errors.summary = xhr.response.message;

            this.setState({
            errors
            });
            console.log(this.state.errors)
        }
        });
        xhr.send(formData);
    }

    //Handle Parent Login/Signup Input Change
    onParentInput(event) {
        const field = event.target.name;
        const parent = this.state.parent;
        parent[field] = event.target.value;
    
        this.setState({
          parent
        });
       
    }

    ///Handling parent Login
    onParentLogin(event){
            // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    
        // create a string for an HTTP body message
        const parentEmail = encodeURIComponent(this.state.parent.parentEmail);
        const parentPassword = encodeURIComponent(this.state.parent.parentPassword);
        const formData = `email=${parentEmail}&password=${parentPassword}`;
    
        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/parent-auth/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            // success
            // change the component-container state
            this.setState({
              errors: {}
            });
    
            // save the token
            ParentAuth.authenticateUser(xhr.response);
    
    
            // change the current URL to /
            this.context.router.history.push('/parent');
            // window.location.replace('/') 

          } else {
            // failure
    
            // change the component state
            const errors = xhr.response.errors ? xhr.response.errors : {};
            errors.summary = xhr.response.message;
    
            this.setState({
              errors
            });

            console.log(this.state.errors)
          }
        });
        xhr.send(formData);
    }
    render() {
        return (
            <div>
              <div className="section" id="section0">
                  <div id="clouds">
                    <Row>
                        <Col md="6">
                        <Button id="childLogInBtn" color="primary" onClick={this.toggle}>{this.props.buttonLabel}Child Log In</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                          <ModalHeader toggle={this.toggle}>Log In as a Child</ModalHeader>
                          <ModalBody>
                              <form className="form" onSubmit={this.onLoginSubmit}>
                                <input 
                                    onChange={this.onInputChange}
                                    errorText={this.state.errors.name}
                                    className="form-control" id="userID" type="text" name="name" placeholder="Username" /><br />
  
                                <input 
                                    onChange={this.onInputChange}
                                    className="form-control" type="password" name="password" placeholder="Password" /><br />
                                <Label>{this.state.errors.summary}</Label>
                              </form>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" type="submit" onClick={this.onLoginSubmit}>Sign In</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                          </ModalFooter>
                        </Modal>
                        </Col>
                    <Col md="6">
                    <Button id="parentLogInBtn" color="primary" onClick={this.toggle2}>{this.props.buttonLabel}Parent Log In</Button>
                    <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                      <ModalHeader toggle={this.toggle2}>Log In as a Parent</ModalHeader>
                      <ModalBody>
                          <form className="form" onSubmit={this.onParentLogin}>
                            <input 
                                onChange={this.onParentInput}
                                errorText={this.state.errors.name}
                                className="form-control" id="userID" type="text" name="parentEmail" placeholder="Username" /><br />

                            <input 
                                onChange={this.onParentInput}
                                className="form-control" type="password" name="parentPassword" placeholder="Password" /><br />
                            <Label>{this.state.errors.summary}</Label>
                          </form>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" type="submit" onClick={this.onParentLogin}>Sign In</Button>{' '}
                        <Button color="secondary" onClick={this.toggle2}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                    </Col>
                </Row>
                    <div className="title">
                        <div className="d-flex justify-content-center" id="smallheader"><img src={MCEDLogo} /></div>
                        <div className="d-flex justify-content-center" id="smallheader2">presents</div><br/>
                        <div className="d-flex justify-content-center" id="header1">KIDS</div>
                        <div className="d-flex justify-content-center" id="header2">at</div>
                        <div className="d-flex justify-content-center" id="header3">PLAY</div>
                    </div>
  
                    <div className="cloud x1"></div>
  
                    <div className="cloud x2"></div>
                    <div className="cloud x3"></div>
                    <div className="cloud x4"></div>
                    <div className="cloud x5"></div>
                    <div className="cloud x6"></div>
                    <div className="cloud x7"></div>
                  </div>
              </div>
  
  
  
              <div className="section" id="section1">
                  <Row>
                      <Col className="md-12">
                          <div id="section01" className="text-center">WHO ARE WE?</div>
                      </Col>
                  </Row>
                  <Row className="align-items-end">
                      <Col><img id="left" src={leftImage} className="img-fluid" alt="Responsive image" />
                      </Col>
                      <Col><img id="middle" src={middleImage} className="img-fluid" alt="Responsive image" />
                      </Col>
                      <Col><img id="right" src={rightImage} className="img-fluid" alt="Responsive image" />
                      </Col>
                  </Row>
                  <Row className="rowPadding">
                      <Col md="4" id="leftcol">
                        <p>SAFE HAVEN</p>
                        <p id="leftcolmn">Parents create children's accounts and are able to moderate and have the ability to view their child's activities and messages posted in the chatroom.  This means no unapproved interactions with strangers, unapproved links, or private messages.  </p>
                      </Col>
                      <Col md="4" id="midcol">
                        <p>LEARN & PLAY</p>
                        <p id="midcolmn">Kids Play Zone offers safe Youtube videos to view and learn from, in addition to safe and fun games.</p>
                      </Col>
                      <Col md="4" id="rightcol">
                        <p>SOCIALIZE</p>
                        <p id="rightcolmn">Young children are online and want to join social media sites.  Kids Play Zone can teach your child how to use a social media site in a safe and responsible manner.</p>
                      </Col>
                  </Row>
              </div>
  
  
  
              <div className="section" id="section2">
                  <h1 id="section2header">HOW DOES IT WORK?</h1>
                  <Row className="justify-content-center" id="sec2columns">
                      <Col sm="6" md="3" id="column1"><h2 className="step">STEP 1</h2><p className="stepText">A parent (Administrator) will sign up for an exclusive family module.</p></Col>
                      <Col sm="6" md="3" id="column2"><h2 className="step">STEP 2</h2><p className="stepText">Parent can invite friends or family of their child into their exclusive module.</p></Col>
                      <Col sm="6" md="3" id="column3"><h2 className="step">STEP 3</h2><p className="stepText">Parents of friends or family who create an account must enter an exclusive code to join your family module.</p></Col>
                      <Col sm="6" md="3" id="column4"><h2 className="step">STEP 4</h2><p className="stepText">Parents automatically become Moderators and are able to see children's activities via the dashboard.</p></Col>
                  </Row>
                  <Row className="justify-content-center" id="bottomheader">
                      <h2 id="join-text">Ready to join?</h2>
                  </Row>
              </div>
  
  
  
              <div className="section" id="section3">
                  <h1 id="sec3header">LET'S PLAY!</h1>
  
                      <Row className="d-flex justify-content-center">
                          <Col md="6" id="rec">
                              <Form  onSubmit={this.onSignupSubmit}>
                                  <FormGroup className="signUpForm">
                                      <Label for="childNameInput">Child's Name (This will be the child's UserName)</Label>
                                      <Input 
                                        onChange={this.onInputChange}
                                        value={this.state.user.name}
                                        type="childName" name="name" id="childNameInput" placeholder="Enter Child's Name" />
                                        <Label>{this.state.errors.name}</Label>
                                  </FormGroup>
                                  <FormGroup id="childPw" className="signUpForm">
                                      <Label for="childPwInput">Child's Password</Label>
                                      <Input 
                                        onChange={this.onInputChange}
                                        value={this.state.user.password}
                                        type="password" name="password" id="childPwInput" placeholder="Enter Child's Password" />
                                        <Label>{this.state.errors.password}</Label>
                                  </FormGroup>
                                  <Button id="childBtn" className="btn btn-primary d-flex justify-content-center" type="submit">Submit</Button>
                              </Form>
                              
                              <Form onSubmit={this.onParentSignup}>
                              <FormGroup id="parentEmail" className="signUpForm">
                                  <Label for="emailInput">Parent's Email</Label>
                                  <Input 
                                    onChange={this.onParentInput}
                                    value={this.state.parent.parentEmail}
                                    type="email" name="parentEmail" id="emailInput" placeholder="Enter Parent's Email" />
                                  <Label>{this.state.errors.name}</Label>  
                              </FormGroup>
                              <FormGroup id="parentPw" className="signUpForm">
                                  <Label for="pwInput">Parent's Password</Label>
                                  <Input 
                                    onChange={this.onParentInput}
                                    value={this.state.parent.parentPassword}
                                    type="password" name="parentPassword" id="pwInput" placeholder="Enter Parent's Password" />
                                  <Label>{this.state.errors.password}</Label>
                                </FormGroup>
                              <Button id="parentBtn" className="btn btn-primary d-flex justify-content-center" type="submit">Submit</Button>                              
                          </Form>
                          </Col>
                      </Row>
  
                  <div className="dog">
                      <div className="ears"></div>
                      <div className="body">
                          <div className="eyes"></div>
                          <div className="beard">
                              <div className="mouth">
                                  <div className="tongue"></div>
                              </div>
                          </div>
                          <div className="belt">
                              <div className="locket"><b id="KAP">KAP</b></div>
                              <div className="dot dot1"></div>
                              <div className="dot dot2"></div>
                              <div className="dot dot3"></div>
                              <div className="dot dot4"></div>
                              <div className="tag"></div>
                          </div>
                              <div className="stomach"></div>
                          <div className="legs">
                              <div className="left"></div>
                              <div className="right"></div>
                          </div>
                      </div>
                      <div className="tail"></div>
                  </div>
              </div>     
          </div>
          
    );
  }
}

LandingPage.contextTypes = {
    router: PropTypes.object.isRequired
  };
 
export default LandingPage;