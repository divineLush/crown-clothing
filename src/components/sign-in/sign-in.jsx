import React from 'react';

import FormInput from '../form-input/form-input.jsx';
import Button from '../button/button.jsx';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error.message);
    }
    this.setState({ email: '', password: '' });
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render () {
    const { email, password } = this.state;

    return (
      <section className="sign-in">
        <h2 className="sign-in__title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={ this.handleSubmit }>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={ email }
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={ password }
            handleChange={ this.handleChange }
            required
          />
          <section className="sign-in__form-btn-container">
            <Button type="submit">Sign In</Button>
            <Button
              onClick={ signInWithGoogle }
              modifier="google-sign-in"
            >
              Sign in with Google
            </Button>
          </section>
        </form>
      </section>
    );
  }
}

export default SignIn;
