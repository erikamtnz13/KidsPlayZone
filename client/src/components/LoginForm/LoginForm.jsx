import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Card, CardText, Input, Button } from 'reactstrap';
import './loginForm.css';



const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
}) => (
  <Container className="flexcontainer">
    <Card className="login-card">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Login</h2>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <Input
            type="text"
            name="name"
            errorText={errors.email}
            onChange={onChange}
            placeholder="Child Username"
            value={user.name}
          />
        </div>

        <div className="field-line">
          <Input
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
            placeholder="Child Password"
          />
        </div>

        <div className="button-line">
          <Button color="primary" className="btn-block">Log in</Button>
        </div>

        <CardText className="cardText">Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
      </form>
    </Card>
  </Container>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
