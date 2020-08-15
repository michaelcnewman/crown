import React from 'react';
import './sign-in-and-register.component.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndRegister = () => {
  return (
    <div className="sign-in-and-register">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndRegister;
