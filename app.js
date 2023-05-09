import React from 'react';
import './index.css';
import './queries.css';
import Apply from './apply';
import ErrorPage from './errorPage';
import ApplicationForm from './applicationform';
import ApplicationFormTwo from './applicationformtwo';
import ApplicationFormThree from './applicationformthree';
import ApplicationFormSuccess from './applicationformsuccess';
import EmailLink from './emailLink';
import LoginForm from './login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SetPassword from './setpassword';
import SignInForm from './signin';
import HomePage from './homepage';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/apply-job'>
            <Apply />
          </Route>
          <Route path='/application-form/step-one'>
            <ApplicationForm />
          </Route>
          <Route path='/application-form/step-two'>
            <ApplicationFormTwo />
          </Route>
          <Route path='/application-form/step-three'>
            <ApplicationFormThree />
          </Route>
          <Route path='/application-form/success'>
            <ApplicationFormSuccess />
          </Route>
          <Route path='/email-notification'>
            <EmailLink />
          </Route>
          <Route path='/login-form'>
            <LoginForm />
          </Route>
          <Route path='/set-password'>
            <SetPassword />
          </Route>
          <Route path='/sign-in'>
            <SignInForm />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
