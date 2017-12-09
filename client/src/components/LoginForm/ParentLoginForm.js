import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Card, CardText, Input, Button } from 'reactstrap';
import './loginForm.css';



const ParentLoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  parent
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
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={parent.email}
          />
        </div>

        <div className="field-line">
          <Input
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={parent.password}
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

ParentLoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  parent: PropTypes.object.isRequired
};

export default ParentLoginForm;
