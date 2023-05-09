import React, { useEffect } from 'react';
import { useState } from 'react';
import './index.css';
import './queries.css';
import './nick-romanov-tmTTRaNZNfI-unsplash.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ApplicationForm from './applicationform';
import SignInForm from './signin';
export default function Apply() {
  const [application, setApplication] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [overlay, setOverlay] = useState(false);

  function openApplication() {
    setApplication(!application);
  }

  function handleNavOpen() {
    setOpenNav(!openNav);
    setOverlay(!overlay);
  }

  const onOverlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(3px)',
    zIndex: 5,
  };
  const offOverlay = {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'inherit',
    backdropFilter: 0,
    zIndex: 0,
  };

  function openLoginForm() {
setLoginPage(!loginPage)
  }

  return (
    <>
      <section>
        {application ? (
          <ApplicationForm />
        ) : loginPage ? <SignInForm /> : (
          <figure>
            <NavbarModal openLoginForm={openLoginForm} openNav={openNav} handleNavOpen={handleNavOpen} />
            <nav style={overlay ? onOverlay : offOverlay} className='apply-nav'>
              <aside className='company-logo'>
                <h4>Telsa</h4>
                <p>Careers</p>
              </aside>

              <ul className='nav-open'>
                <li>Explore Jobs</li>
                <li>Manufacturing</li>
                <li>AI</li>
                <li>Internships</li>
                <li>Veterans</li>
                <li>About Us</li>
              </ul>

              <div className='profile-nav'>
                <p onClick={openLoginForm}>Profile</p>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='world-icon'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                    />
                  </svg>
                  <p>Us</p>
                </div>
                <div onClick={handleNavOpen} className='menuBtn'>
                  Menu
                </div>
              </div>
            </nav>
            <div className='hero'>
              <img src={require('./nick-romanov-tmTTRaNZNfI-unsplash.jpg')} />
            </div>
            <main className='job-typeModal'>
              <p className='search'>Go to search</p>
              <h5>Front End Engineer, Factory Software</h5>
              <ul>
                <li>
                  <h6>Job Category</h6>
                  <p>Engineering & Information Technology</p>
                </li>
                <li>
                  <h6>Location</h6>
                  <p>Fremont, California</p>
                </li>
                <li>
                  <h6>Req. ID</h6>
                  <p>94327</p>
                </li>
                <li>
                  <h6>Job Type</h6>
                  <p>Full-time</p>
                </li>
              </ul>
              <button onClick={openApplication} className='apply-btn'>
                Apply
              </button>
            </main>
          </figure>
        )}
      </section>
    </>
  );
}

function NavbarModal({ openNav, handleNavOpen, openLoginForm }) {
  const onNav = {
    transform: 'translateX(0)',
    opacity: 1,
    visibility: 'visible',
    pointerEvents: 'auto',
  };

  const offNav = {
    transform: 'translateX(100%)',
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
  };

  return (
    <main style={openNav ? onNav : offNav} className='navside-modal'>
      <h6 onClick={handleNavOpen} className='close-navside-modal'>
        x
      </h6>
      <ul>
        <li>Explore Jobs</li>
        <li>Manufacturing</li>
        <li>AI</li>
        <li>Internships</li>
        <li>Veterans</li>
        <li>About Us</li>
        <li onClick={openLoginForm}>Profile</li>
      </ul>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='world-icon'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
          />
        </svg>
        <h6>United States</h6>
      </div>
      <p className='language'>English</p>
    </main>
  );
}
