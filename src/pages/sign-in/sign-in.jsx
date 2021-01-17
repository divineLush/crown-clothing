import React from 'react';

import SignIn from '../../components/sign-in/sign-in.jsx';
import SignUp from '../../components/sign-up/sign-up.jsx';

import './sign-in.scss';

const SignInPage = () => (
  <section className="sign-in-page">
    <SignIn />
    <SignUp />
  </section>
);

export default SignInPage;
