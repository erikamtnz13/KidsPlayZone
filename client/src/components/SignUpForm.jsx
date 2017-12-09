import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Card, CardText, Input, Button } from 'reactstrap';
import './signUpForm.css';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Container className="flexcontainer">
    <Card className="signup-card">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Sign Up</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <Input
            type="text" 
            name="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
            placeholder="Child's Username"
          />
        </div>

        <div className="field-line">
          <Input
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
            placeholder="Child's Password"
          />
        </div>

        <div className="button-line">
          <Button color="primary" className="btn-block">Create New Account</Button>
        </div>

        <CardText className="cardText">Already have an account? <Link to={'/login'}>Log in</Link></CardText>
      </form>
    </Card>
  </Container>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;

