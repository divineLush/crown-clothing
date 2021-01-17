import React from 'react';

import FormInput from '../form-input/form-input.jsx';
import Button from '../button/button.jsx';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render () {
    return (
      <section className="sign-in">
        <h2 className="sign-in__title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={ this.handleSubmit }>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={ this.state.email }
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={ this.state.password }
            handleChange={ this.handleChange }
            required
          />
          <Button type="submit">Sign In</Button>
        </form>
      </section>
    );
  }
}

export default SignIn;
