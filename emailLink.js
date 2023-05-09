import React, { useState } from 'react';
import './index.css';
import './queries.css';
import './jon-koop-khYVyHiNZo0-unsplash.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginForm from './login';
import SetPassword from './setpassword';

export default function EmailLink({ formData, onHandleFormChange }) {
  const [loginForm, setLoginForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordLink, setPasswordLink] = useState(false);
  function openLoginForm() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    setTimeout(() => {
      setLoginForm(true);
    }, 1500);

    setTimeout(() => {
      setLoginForm(false);
    }, 2000);

    setTimeout(() => {
      setPasswordLink(true);
    }, 2500);
  }

  return (
    <>
      <section>
        {loginForm ? (
          <LoginForm
            onHandleFormChange={onHandleFormChange}
            formData={formData}
          />
        ) : loading ? (
          <div className='spinner-container'>
            <svg className='circle-svg' height='50' width='50'>
              <circle cx='25' cy='25' r='17.5'></circle>
            </svg>
          </div>
        ) : passwordLink ? (
          <SetPassword
            formData={formData}
            onHandleFormChange={onHandleFormChange}
          />
        ) : (
          <figure className='emailNotification-section'>
            <div className='email-photo'>
              <img src={require('./jon-koop-khYVyHiNZo0-unsplash.jpg')} />
            </div>
            <h5 className='user'>Hello {formData.firstName},</h5>
            <h6>
              Thank you for submitting your application for the Front End
              Engineer, Factory Software, 94327 position. We will be reviewing
              your qualifications shortly.
            </h6>
            <h6>
              To manage your personal data and view your application status,
              please sign in to <a onClick={openLoginForm} href='#'>
                Tesla Connect
              </a>
              .
            </h6>
            <div>
              <p>Best Regards,</p>
              <p> Tesla Recruiting</p>
            </div>
            <h6>
              If you have not created an account or have forgotten your password
              please click <a href='#'>here</a> to reset it.
            </h6>
            <div>
              <svg
                viewBox='0 0 24 24'
                fill='currentColor'
                height='1em'
                width='2rem'
              >
                <path d='M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z' />
              </svg>
            </div>
          </figure>
        )}
      </section>
    </>
  );
}
