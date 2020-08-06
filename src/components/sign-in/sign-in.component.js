import React, { Component } from 'react';
import './sign-in.styles.scss';
import '../form-input/form-input.component';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { auth, signInWithGoggle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <Button isGoggleSignIn={false} type="submit">
              Sign in
            </Button>
            <Button
              isGoggleSignIn={true}
              onClick={signInWithGoggle}
              type="button"
            >
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
