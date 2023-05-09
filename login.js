import React, { useEffect, useState } from 'react';
import './index.css';
import './queries.css';

export default function LoginForm({formData}) {

  return (
    <>
      <figure className='signin'>
        <h2>Sign In</h2>
        <EmailExist />
        <div className='signin-subheader'>
          {/* <h6>{formData.email}</h6> */}
          <h6>{formData.email}</h6>
          <p>Change</p>
        </div>
        <form className='applicationForm'>
          <label>
            <h6 className='password'>Password</h6>
            <input type='password' />
          </label>
          <button className='sign-in'>Sign In</button>
          <div className='cancel-login'>Cancel</div>
        </form>
      </figure>
    </>
  );
}

function EmailExist() {
  return (
    <div className='email-existPopup'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
        />
      </svg>
      <h6>Email already exists. Check your email to finish account setup.</h6>
    </div>
  );
}