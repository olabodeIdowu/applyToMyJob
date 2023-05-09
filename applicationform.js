import React, { useState } from 'react';
import './index.css';
import './queries.css';
import './nick-romanov-tmTTRaNZNfI-unsplash.jpg';
import countryCode from './countryCode';
import ApplicationFormTwo from './applicationformtwo';
import userForm from './userForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function ApplicationForm() {
  const [formData, setFormData] = useState(userForm);
  const [formTwo, setFormTwo] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFormChange(e) {
    e.preventDefault();
    if (!e.target) return;
    const { checked, value, type, name } = e.target;
    // console.log(checked, value, type, name);
    setFormData((formData) => {
      return {
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function submitForm(form) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let emailRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        let firstNameError =
          /[@#$%^&*+!]/.test(form.firstName) ||
          /\d/.test(form.firstName) ||
          /[\s]/.test(form.firstName);
        let noFirstNameError = form.firstName.length === 0;
        let lastNameError =
          /[@#$%^&*+!]/.test(form.lastName) ||
          /\d/.test(form.lastName) ||
          /[\s]/.test(form.lastName);
        let noLastNameError = form.lastName.length === 0;
        let phoneError = !phoneRegex;
        let noPhoneError = form.phone.length === 0;
        let noPhoneTypeError = form.phoneType.length === 0;
        let emailError = !form.email.match(emailRegex);
        let noEmailError = form.email.length === 0;
        let profileLinkError =
          !/^[https://www.]/.test(form.profileLink) ||
          /[\s]/.test(form.profileLink);
        let noProfileLinkError = form.profileLink.length === 0;
        let evidenceOfExcellenceError = form.evidenceOfExcellence.length < 10;
        let noEvidenceOfExcellenceError =
          form.evidenceOfExcellence.length === 0;

        if (firstNameError) {
          reject(
            new Error(
              'Ex. Olabode Legal First Name should not contain a whitespace, number or character!'
            )
          );
        } else if (lastNameError) {
          reject(
            new Error(
              'Ex. Idowu Legal Last Name should not contain a whitespace, number or character!'
            )
          );
        } else if (phoneError) {
          reject(
            new Error(
              'Ex. 8165555555 Phone should not contain a whitespace, letter or any character!'
            )
          );
        } else if (emailError) {
          reject(
            new Error(
              'Ex. johndoe@example.com . check to see you are writing the right email address'
            )
          );
        } else if (profileLinkError) {
          reject(new Error('Ex. https://www.profilelink'));
        } else if (evidenceOfExcellenceError) {
          reject(
            new Error('check to see you have atleast 10 letters in total')
          );
        } else if (noFirstNameError) {
          reject(
            new Error('Please provide an input value for lega first name!')
          );
        } else if (noLastNameError) {
          reject(
            new Error('Please provide an input value for legal last name!')
          );
        } else if (noEmailError) {
          reject(new Error('Please provide an input value for email address!'));
        } else if (noPhoneTypeError) {
          reject(new Error('Please provide an input value phone number!'));
        } else if (noPhoneError) {
          reject(new Error('Please provide an input value phone number!'));
        } else if (noProfileLinkError) {
          reject(new Error('Please provide an input value for social link!'));
        } else if (noEvidenceOfExcellenceError) {
          reject(
            new Error(
              'Please provide an input value for us to more about you and why you needed this job!'
            )
          );
        } else {
          resolve(form);
        }
      }, 1500);
    });
  }

  async function openFormTwo() {
    setLoading(true);
    try {
      const response = await submitForm(formData);
      if (!response) return;
      setLoading(false);
      setFormTwo(!formTwo);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }

  return (
    <>
      <section>
        {formTwo ? (
          <ApplicationFormTwo
            formData={formData}
            onHandleFormChange={handleFormChange}
            formTwo={formTwo}
            setFormTwo={setFormTwo}
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

            <p>step 1 of 3</p>
            <h5 className='application-subheader'>Personal Information</h5>

            <form className='applicationForm'>
              <label>
                <p>Legal First Name</p>
                <input
                  onChange={handleFormChange}
                  name='firstName'
                  required
                  type='text'
                />
              </label>
              <label>
                <p>Legal Last Name</p>
                <input
                  onChange={handleFormChange}
                  name='lastName'
                  required
                  type='text'
                />
              </label>
              <label>
                <p>Phone Number</p>
                <div className='phone'>
                  <select onChange={handleFormChange} name='countryDialCode'>
                    {countryCode.map((cc, i) => {
                      return (
                        <option value={cc.dial_code} key={i}>
                          {cc.code} {cc.dial_code}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    onChange={handleFormChange}
                    name='phone'
                    required
                    type='text'
                  />
                </div>
              </label>
              <label>
                <p>Contact Phone Type</p>
                <select onChange={handleFormChange} name='phoneType' required>
                  <option value=''>-Phone Type-</option>
                  <option value='Mobile'>Mobile</option>
                  <option value='LandLine'>LandLine</option>
                </select>
              </label>
              <label>
                <p>Email</p>
                <input
                  onChange={handleFormChange}
                  name='email'
                  required
                  type='text'
                />
              </label>
              <label>
                <p>Country/Region of Residence</p>
                <select onChange={handleFormChange} name='country' required>
                  {countryCode.map((cc, i) => {
                    return (
                      <option value={cc.name} key={i}>
                        {cc.name}
                      </option>
                    );
                  })}
                </select>
              </label>
              <p className='plProvide'>
                Please provide at least one item below to proceed.
              </p>
              <label>
                <p>Profile Link</p>
                <input
                  onChange={handleFormChange}
                  name='profileLink'
                  required
                  type='text'
                />
              </label>
              <label>
                <p>Profile Link Type</p>
                <select
                  onChange={handleFormChange}
                  name='profileLinkType'
                  required
                >
                  <option value=''>- Select type -</option>
                  <option value='Linkedln'>Linkedln</option>
                  <option value='Facebook'>Facebook</option>
                  <option value='Instagram'>Instagram</option>
                  <option value='Twitter'>Twitter</option>
                </select>
              </label>
              <label>
                <p>Evidence of Excellence</p>
                <textarea
                  onChange={handleFormChange}
                  name='evidenceOfExcellence'
                  required
                  type='text'
                />
                <div className='characters-text'>2500 characters remaining</div>
              </label>
              <div className='resume'>
                <p>Resume</p>
                <div className='resume-header'>
                  one file max:10MB (PDF, Doc, TXT)
                </div>
                <input
                  onChange={handleFormChange}
                  name='chooseFile'
                  required
                  type='file'
                />
              </div>
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
              <button onClick={openFormTwo} className='apply-btn'>
                Next
              </button>
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

// function Error({error}) {
//   return (

//   )
// }
