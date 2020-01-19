import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, TextField, Button } from '@material-ui/core';
import { userSignup } from '../redux/actions/user';

const SignUp = ({ userSignup }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
  });
  const { firstName, lastName, email, password1, password2 } = formData;

  const onChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const submitFormData = e => {
    e.preventDefault();
    userSignup(formData);
  };

  return (
    <Container maxWidth="md">
      <h1>Sign Up</h1>
      <form onSubmit={e => submitFormData(e)}>
        <TextField
          fullWidth={true}
          variant="outlined"
          id="firstName"
          name="firstName"
          label="First Name"
          margin="normal"
          placeholder="First Name"
          type="text"
          value={firstName}
          onChange={e => onChange(e)}
        />
        <TextField
          fullWidth={true}
          variant="outlined"
          id="lastName"
          name="lastName"
          label="Last Name"
          margin="normal"
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={e => onChange(e)}
        />

        <TextField
          fullWidth={true}
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          margin="normal"
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => onChange(e)}
        />
        <TextField
          fullWidth={true}
          variant="outlined"
          id="password1"
          name="password1"
          label="Password"
          margin="normal"
          placeholder="Password"
          type="password"
          value={password1}
          onChange={e => onChange(e)}
        />
        <TextField
          fullWidth={true}
          variant="outlined"
          id="password2"
          name="password2"
          label="Confirm Password"
          margin="normal"
          placeholder="Confirm Password"
          type="password"
          value={password2}
          onChange={e => onChange(e)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          fullWidth={true}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default connect(null, { userSignup })(SignUp);
