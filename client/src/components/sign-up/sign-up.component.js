import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.sytles.scss';

const SignUp = ({ signUpStartDispatch }) => {
  const [createUser, setCreateUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = createUser;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateUser({ ...createUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match'); // eslint-disable-line no-alert
      return;
    }
    signUpStartDispatch(email, password, displayName);
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with you email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button isGoggleSignIn={false} type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStartDispatch: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
