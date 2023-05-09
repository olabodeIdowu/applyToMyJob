import React, { useState } from 'react';
import './index.css';
import './queries.css';
import './nick-romanov-tmTTRaNZNfI-unsplash.jpg';
import ApplicationFormThree from './applicationformthree';
import countryCode from './countryCode';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function ApplicationFormTwo({
  formData,
  onHandleFormChange,
  formTwo,
  setFormTwo,
}) {
  const [formThree, setFormThree] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  function goBackToForm() {
    setFormTwo(!formTwo);
  }

  function submitForm(form) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let formTwoError =
          form.jobOpportunities.length === 0 ||
          form.jobOpportunities.length === 0 ||
          form.isContractor.length === 0 ||
          form.receivingText.length === 0 ||
          form.telsaEmployed.length === 0;

        let privacyError = form.privacy === false;
        let legalNameError =
          form.legalName.length === 0 || /[\d]/.test(form.legalName);

        if (formTwoError) {
          reject(new Error('choose an option'));
        } else if (privacyError) {
          reject(new Error('you have to agree to terms and conditions'));
        } else if (legalNameError) {
          reject(new Error('Ex Olabode Idowu'));
        } else {
          resolve(form);
        }
      }, 1500);
    });
  }

  async function openFormThree() {
    setLoading(true);
    try {
      const response = await submitForm(formData);
      if (!response) return;
      setLoading(false);
      setFormThree(!formThree);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }

  return (
    <>
      <section>
        {formThree ? (
          <ApplicationFormThree
            formData={formData}
            onHandleFormChange={onHandleFormChange}
            formThree={formThree}
            setFormThree={setFormThree}
          />
        ) : loading ? (
          <div className='spinner-container'>
            <svg className='circle-svg' height='50' width='50'>
              <circle cx='25' cy='25' r='17.5'></circle>
            </svg>
          </div>
        ) : (
          <figure className='form-section'>
            <h2 className='application-header'>Job Application</h2>
            <p className='application-header--p'>
              Front End Engineer, Factory Software
            </p>

            <p>step 2 of 3</p>
            <h5 className='application-subheader'>Legal Acknowledgment</h5>

            <form className='applicationForm'>
              <div className='availability'>
                <p>What is your availability ot notice period?</p>
                <select onChange={onHandleFormChange} name='availability'>
                  <option value=''>- Select type -</option>
                  <option value='Immediately'>Immediately</option>
                  <option value='Not Sure'>Not Sure</option>
                  <option value='Not Available'>Not Available</option>
                  <option value='Rather Not Say'>Rather Not Say</option>
                </select>
              </div>
              <div className='form-radio'>
                <p>Have you previously been employed by Tesla?</p>
                <div className='radio'>
                  <div className='YesRadioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='yesTelsaEmployed'
                      type='radio'
                      name='telsaEmployed'
                      value='Yes'
                    />
                    <label htmlFor='yesTelsaEmployed'>Yes</label>
                  </div>
                  <div className='radioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='noTelsaEmployed'
                      type='radio'
                      name='telsaEmployed'
                      value='No'
                    />
                    <label htmlFor='noTelsaEmployed'>No</label>
                  </div>
                </div>
              </div>
              <div className='form-radio'>
                <p>
                  Will you now or in the future require immigration sponsorship
                  for employment with Tesla?
                </p>
                <div className='radio'>
                  <div className='YesRadioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='yesSponsorship'
                      type='radio'
                      name='sponsorship'
                      value='Yes'
                    />
                    <label htmlFor='yesSponsorship'>Yes</label>
                  </div>
                  <div className='radioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='noSponsorship'
                      type='radio'
                      name='sponsorship'
                      value='No'
                    />
                    <label htmlFor='noSponsorship'>No</label>
                  </div>
                </div>
              </div>
              <div className='form-radio'>
                <p>
                  I authorize Tesla to consider me for other job opportunities
                  for the next 36 months within Tesla in addition to the
                  specific job I am applying for.
                </p>
                <div className='radio'>
                  <div className='YesRadioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='yesJobOpportunities'
                      type='radio'
                      name='jobOpportunities'
                      value='Yes'
                    />
                    <label htmlFor='yesJobOpportunities'>Yes</label>
                  </div>
                  <div className='radioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='noJobOpportunities'
                      type='radio'
                      name='jobOpportunities'
                      value='No'
                    />
                    <label htmlFor='noJobOpportunities'>No</label>
                  </div>
                </div>
              </div>
              <div className='form-radio'>
                <p>Are you a former/current intern or contractor?</p>
                <div className='radio'>
                  <div className='YesRadioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='yesisContractor'
                      type='radio'
                      name='isContractor'
                      value='Yes'
                    />
                    <label htmlFor='yesisContractor'>Yes</label>
                  </div>
                  <div className='radioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='noisContractor'
                      type='radio'
                      name='isContractor'
                      value='No'
                    />
                    <label htmlFor='noisContractor'>No</label>
                  </div>
                </div>
              </div>
              <div className='form-radio'>
                <p>
                  Do you consent to receiving text messages throughout your
                  application process including but not limited to interview
                  details, pre-employment screening notifications and reminders?
                </p>
                <div className='radio'>
                  <div className='YesRadioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='yes-text-messages'
                      type='radio'
                      name='receivingText'
                      value='Yes'
                    />
                    <label htmlFor='yes-text-messages'>Yes</label>
                  </div>
                  <div className='radioItem'>
                    <input
                      onChange={onHandleFormChange}
                      id='no-text-messages'
                      type='radio'
                      name='receivingText'
                      value='No'
                    />
                    <label htmlFor='no-text-messages'>No</label>
                  </div>
                </div>
              </div>
              <ol>
                <li>
                  I certify that all statements I have made on this application
                  and on my resume or any other supplementary materials are true
                  and correct. I acknowledge that any false statement or
                  misrepresentation on this application, my resume, or
                  supplementary materials will be cause for refusal to hire, or
                  for immediate termination of employment at any time during the
                  period of my employment.
                </li>
                <li>
                  I understand and agree that, if I am offered a position, it
                  will be offered on condition that my employment will be at
                  will and for no definite period, and that my employment may be
                  terminated, at any time, with or without cause and with or
                  without prior notice.
                </li>
                <li>
                  I understand that no supervisor or manager may alter or amend
                  the above conditions except in writing, signed by a company
                  officer.
                </li>
                <li className='teslaPrivacy'>Tesla Talent Privacy Notice</li>
                <li className='teslaAgreement'>
                  Tesla's Arbitration Agreement
                </li>
              </ol>
              <div className='checkBox'>
                <input
                  onChange={onHandleFormChange}
                  name='privacy'
                  type='checkbox'
                  required
                />
                <p>
                  I have read & understand the statements above and accept them
                  as conditions of employment
                </p>
              </div>
              <label>
                <p>Legal Name</p>
                <input
                  onChange={onHandleFormChange}
                  name='legalName'
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
              <div onClick={goBackToForm} className='previous-btn'>
                Previous
              </div>
              <div onClick={openFormThree} className='next-btn'>
                Next
              </div>
            </form>
          </figure>
        )}
      </section>
    </>
  );
}
