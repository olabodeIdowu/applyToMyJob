import React, { useEffect, useState } from 'react';
import './index.css';
import './queries.css';
import './nick-romanov-tmTTRaNZNfI-unsplash.jpg';
import ApplicationFormSuccess from './applicationformsuccess';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function ApplicationFormThree({
  formData,
  onHandleFormChange,
  formThree,
  setFormThree,
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);

  function goBackToFormTwo() {
    setFormThree(!formThree);
  }

  function submitForm(form) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let formThreeError =
          form.veteran.length === 0 ||
          form.race.length === 0 ||
          form.disability.length === 0;
        let legalNameError = form.legalNameVerify !== form.legalName;

        if (formThreeError) {
          reject(new Error('choose an option'));
        } else if (legalNameError) {
          reject(new Error('your legal name should match the previous one'));
        } else {
          resolve(form);
        }
      }, 1500);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // if information is correct
    try {
      const response = await submitForm(formData);
      if (!response) return;
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1500);

      setTimeout(() => {
        setSuccess(true);
      }, 2500);

      setTimeout(() => {
        setEmailSent(true);
      }, 10000);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }

  return (
    <>
      <section>
        {loading ? (
          <div className='spinner-container'>
            <svg className='circle-svg' height='50' width='50'>
              <circle cx='25' cy='25' r='17.5'></circle>
            </svg>
          </div>
        ) : success ? (
          <ApplicationFormSuccess
            onHandleFormChange={onHandleFormChange}
            formData={formData}
            emailSent={emailSent}
          />
        ) : (
          <figure className='form-section'>
            <h2 className='application-header'>Job Application</h2>
            <p className='application-header--p'>
              Front End Engineer, Factory Software
            </p>

            <p>step 3 of 3</p>
            <h5 className='application-subheader'>Other Information</h5>

            <form onSubmit={handleSubmit} className='applicationForm'>
              <label>
                <p>Veteran Status</p>
                <select onChange={onHandleFormChange} name='veteran'>
                  <option value=''>-Select an option-</option>
                  <option value='I am not a protected veteran'>
                    I am not a protected veteran
                  </option>
                  <option value='I identify as one or more of the classifications of protected vetêrans'>
                    I identify as one or more of the classifications of
                    protected vetêrans
                  </option>
                  <option value='I choose not to disclose'>
                    I choose not to disclose
                  </option>
                </select>
              </label>
              <label>
                <p>Race & Ethnicity</p>
                <select onChange={onHandleFormChange} name='race'>
                  <option value=''>-Select an option-</option>
                  <option value='Hispanic or Latino'>Hispanic or Latino</option>
                  <option value='White'>White</option>
                  <option value='Black'>Black</option>
                  <option value='Asian'>Asian</option>
                  <option value='Native American or Alaskan Native'>
                    Native American or Alaskan Native
                  </option>
                  <option value='Native Hawaiian or other Pacific Islander'>
                    Native Hawaiian or other Pacific Islander
                  </option>
                  <option value='Two or more races'>Two or more races</option>
                  <option value='I choose not to disclose'>
                    I choose not to disclose
                  </option>
                </select>
                <label>
                  <p>Disability</p>
                  <select onChange={onHandleFormChange} name='disability'>
                    <option value=''>-Select an option-</option>
                    <option value='Yes, I have a disability (or previously had a disability)'>
                      Yes, I have a disability (or previously had a disability)
                    </option>
                    <option value='No, I do not have a disability I choose not to disclose'>
                      No, I do not have a disability
                    </option>
                    <option value='I choose not to disclose'>
                      I choose not to disclose
                    </option>
                  </select>
                </label>
              </label>

              <label>
                <p>Legal Name</p>
                <input
                  onChange={onHandleFormChange}
                  name='legalNameVerify'
                  required
                  type='text'
                  autoComplete='off'
                />
              </label>

              {error !== null && (
                <h2 className='error-container'>
                  <div className='error-flex'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='red'
                      height='1em'
                      width='2rem'
                    >
                      <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z' />
                      <path d='M10 10.5 A1.5 1.5 0 0 1 8.5 12 A1.5 1.5 0 0 1 7 10.5 A1.5 1.5 0 0 1 10 10.5 z' />
                      <path d='M16.986 10.493 A1.493 1.493 0 0 1 15.493 11.986 A1.493 1.493 0 0 1 14 10.493 A1.493 1.493 0 0 1 16.986 10.493 z' />
                      <path d='M12 14c-3 0-4 3-4 3h8s-1-3-4-3z' />
                    </svg>
                    <span style={{ fontSize: '1rem', color: 'red' }}>
                      {error.message}
                    </span>
                  </div>
                </h2>
              )}

              <div onClick={goBackToFormTwo} className='previous-btn'>
                Previous
              </div>
              <button className='next-btn'>Submit</button>
            </form>
            <aside>
              <p>Telsa © {new Date().getFullYear()}</p>
              <p>Privacy & Legal</p>
            </aside>
          </figure>
        )}
      </section>
    </>
  );
}
