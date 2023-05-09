import React, { useEffect, useState, useRef } from 'react';
import './index.css';
import './queries.css';
import './nick-romanov-tmTTRaNZNfI-unsplash.jpg';
import SignInForm from './signin';


export default function HomePage() {
const [openNav, setOpenNav] = useState(false);
const [openSignIn, setOpenSignIn] = useState(false);
const [overlay, setOverlay] = useState(false);
// const [openNavbar, setOpenNavbar] = useState(false);

function handleNavOpen() {
  setOpenNav(!openNav);
  setOverlay(!overlay);
} 

function handleSignInOptions() {
  setOpenSignIn(!openSignIn);
}

  // function handleOpenNavbar() {
  //   setOpenNavbar(!openNavbar);
  // }

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


  return (
    <>
      <section>
        <NavbarModal openNav={openNav} handleNavOpen={handleNavOpen} />
        {openSignIn ? (
          <SignInForm />
        ) : (
          <figure
            style={overlay ? onOverlay : offOverlay}
            className='homepage-section'
          >
            <h2>
              Up to $7,500 tax credit available for Model Y and Model 3.
              <a href='#'> Learn More</a>
            </h2>
            <main className='homepage-hero'>
              <Header
                handleNavOpen={handleNavOpen}
                handleSignInOptions={handleSignInOptions}
              />
              <div className='home-header'>
                <h2>Experience Tesla</h2>
                <p>Schedule a Demo Drive Today</p>
              </div>
              <h6 className='demo-drive'>Demo Drive</h6>
            </main>
          </figure>
        )}
      </section>
    </>
  );
}


function Header({ handleNavOpen, handleSignInOptions }) {
  return (
    <nav className='home-navigation'>
      <h2>Telsa</h2>

      <ul>
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Model Y</li>
        <li>Solar Roof</li>
        <li>Solar Panels</li>
        <li>Powerwall</li>
      </ul>

      <ul>
        <li>Shop</li>
        <li onClick={handleSignInOptions}>Account</li>
        <li onClick={handleNavOpen}>Menu</li>
      </ul>
    </nav>
  );
}


function NavbarModal({ openNav, handleNavOpen }) {
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
    <main
      style={openNav ? onNav : offNav}
      className='navside-modal homepageNavModal'
    >
      <h6 onClick={handleNavOpen} className='close-navside-modal'>
        x
      </h6>

      <ul>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Demo Drive</li>
        <li>Insurance</li>
        <li>Fleet</li>
        <li>Roadster</li>
        <li>Semi</li>
        <li>Charging</li>
        <li>Commercial Energy</li>
        <li>Utilities</li>
        <li>Find Us</li>
        <li>Support</li>
        <li>Investor Relations</li>
      </ul>

      <div className='worldIcon-margin'>
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
