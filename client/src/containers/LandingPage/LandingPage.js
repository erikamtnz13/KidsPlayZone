import React, { Component } from "react";
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

 
class LandingPage extends Component {
    constructor(props, context) {
    super(props, context)
    this.state = {
      current: 0,
      modal: false,
      errors: {},
      user: {
          name: '',
          password: ''
      }
    };

    this.toggle = this.toggle.bind(this);
    this.onSignupChange = this.onSignupChange.bind(this)
    this.onSignupSubmit = this.onSignupSubmit.bind(this)

    }

    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }

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
        this.context.history.push('/login');
        console.log(this.context)
      
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
    }

    onSignupChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
    
        this.setState({
          user
        });
       
    }

    render() {
        const options = {
            sectionClassName: 'section',
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            arrowNavigation: true,
            
            scrollCallback: (states) => this.setState({current: states.activeSection})
        };

        const {current} = this.state

    return (
        <div>

          <div className="section" id="section0">
              <div id="clouds">
                <div>
                    <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Sign In</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalBody>
                          <form>
                            <input id="userID" type="text" name="name" placeholder="Username" /><br/>
                            <input type="password" name="password" placeholder="Password" />
                          </form>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Sign In</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </div>
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
              <Row>
                  <Col md="4" id="leftcol">SAFE HAVEN</Col>
                  <Col md="4" id="midcol">LEARN & PLAY</Col>
                  <Col md="4" id="rightcol">SOCIALIZE</Col>
              </Row>
              <Row>
                  <Col md="4" id="leftcolmn">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </Col>
                  <Col md="4" id="midcolmn">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Col>
                  <Col md="4" id="rightcolmn">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </Col>
              </Row>
          </div>



          <div className="section" id="section2">
              <h1 id="section2header">HOW DOES IT WORK?</h1>
              <Row className="justify-content-center" id="sec2columns">
                  <Col className="md-2" id="column1"><b>STEP 1</b><br/><br/>A parent (Administrator) will sign up for an exclusive family module.</Col>
                  <Col className="md-2" id="column2"><b>STEP 2</b><br/><br/>Parent can invite friends or family of their child into their exclusive module.</Col>
                  <Col className="md-2" id="column3"><b>STEP 3</b><br/><br/>Parents of friends or family who create an account must enter an exclusive code to join your family module.</Col>
                  <Col className="md-2" id="column4"><b>STEP 4</b><br/><br/>Parents automatically become Moderators and are able to see children's activities via the dashboard.</Col>
              </Row>
              <Row className="justify-content-center" id="bottomheader">
                  <h2>Ready to join?</h2>
              </Row>
          </div>



          <div className="section" id="section3">
              <h1 id="sec3header">LET'S PLAY!</h1>

                  <Row className="d-flex justify-content-center">
                      <Col md="6" id="rec">
                          <Form  onSubmit={this.onSignupSubmit}>
                              {/* <FormGroup>
                                  <Label for="nameInput">Parent's Name</Label>
                                  <Input type="name" name="name" id="nameInput" placeholder="Enter Parent's Name" />
                              </FormGroup>
                              <FormGroup>
                                  <Label for="emailInput">Parent's Email</Label>
                                  <Input type="email" name="email" id="emailInput" placeholder="Enter Parent's Email" />
                              </FormGroup>
                              <FormGroup>
                                  <Label for="pwInput">Parent's Password</Label>
                                  <Input type="password" name="password" id="pwInput" placeholder="Enter Parent's Password" />
                              </FormGroup> */}
                              <FormGroup>
                                  <Label for="childNameInput">Child's Name (This will be the child's UserName)</Label>
                                  <Input 
                                    onChange={this.onSignupChange}
                                    type="childName" name="name" id="childNameInput" placeholder="Enter Child's Name" />
                              </FormGroup>
                              <FormGroup>
                                  <Label for="childPwInput">Child's Password</Label>
                                  <Input 
                                    onChange={this.onSignupChange}
                                    type="childPw" name="password" id="childPwInput" placeholder="Enter Child's Password" />
                              </FormGroup>
                              <Button className="btn btn-primary d-flex justify-content-center" type="submit">Submit</Button>

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
                          <div className="locket"><b id="l">KAP</b></div>
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
 
export default LandingPage;