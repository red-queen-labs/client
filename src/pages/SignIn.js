import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions/user';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const updateFormState = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const submitFormData = e => {
    e.prevenDefault();
    userLogin(formData);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={e => submitFormData(e)}>
        <input
          type="email"
          name="email"
          id="emailField"
          placeholder="Email"
          value={formData.email}
          onChange={e => updateFormState(e)}
        />
        <input
          type="password"
          name="password"
          id="passwordField"
          placeholder="Password"
          value={formData.password}
          onChange={e => updateFormState(e)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default connect(null, { userLogin })(SignIn);
