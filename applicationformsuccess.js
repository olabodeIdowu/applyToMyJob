import React, { useState } from 'react';
import './index.css';
import './queries.css';
import EmailLink from './emailLink';
import './nick-romanov-tmTTRaNZNfI-unsplash.jpg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function ApplicationSuccess({
  formData,
  onHandleFormChange,
  emailSent,
}) {
  return (
    <section>
      {emailSent ? (
        <EmailLink
          onHandleFormChange={onHandleFormChange}
          formData={formData}
        />
      ) : (
        <figure className='applicationSuccess'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='successFormIcon'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div>
            <h2>Your Application Has Been Received</h2>
            <h6>Front End Engineer, Factory Software</h6>
            <h5>What's Next</h5>
            <p className='check-email-text'>
              Check your email to create vour Tesla Connect account. With Tesla
              Connect, view the status of your application and manage your
              personal information.
            </p>
          </div>

          <aside className='formSuccessFooter'>
            <p>Telsa © {new Date().getFullYear()}</p>
            <p>Privacy & Legal</p>
          </aside>
        </figure>
      )}
    </section>
  );
}
