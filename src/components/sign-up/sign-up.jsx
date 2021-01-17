import React from 'react';

import FormInput from '../form-input/form-input.jsx';
import Button from '../button/button.jsx';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import './sign-up.scss';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });

      // clear form
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render () {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <section className="sign-up">
        <h2 className="sign-up__title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up__form" onSubmit={ this.handleSubmit }>
          <FormInput
            type="text"
            name="displayName"
            value={ displayName }
            onChange={ this.handleChange }
            label="Display Name"
          />
          <FormInput
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={ confirmPassword }
            onChange={ this.handleChange }
            label="Confirm Password"
          />
          <Button type="submit">SIGN UP</Button>
        </form>
      </section>
    );
  }
}

export default SignUp;
