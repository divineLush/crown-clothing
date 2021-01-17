import React from 'react';

import SignIn from '../../components/sign-in/sign-in.jsx';
import SignUp from '../../components/sign-up/sign-up.jsx';

import './sign-in.scss';

const SignInSignUpPage = () => (
  <section className="sign-in-sign-up-page">
    <SignIn />
    <SignUp />
  </section>
);

export default SignInSignUpPage;
