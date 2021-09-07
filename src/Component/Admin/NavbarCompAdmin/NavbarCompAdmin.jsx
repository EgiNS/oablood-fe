import React, { useState } from 'react';
import logo from './Assets/Logo.svg';
import logoOnly from './Assets/LogoOnly.svg';
import ayoDonor from './Assets/Donor.svg';
import poin from './Assets/Poin.svg';
import beranda from './Assets/Beranda.svg';
import reqDarah from './Assets/Request.svg';
import reservasi from './Assets/Reservasi.svg';
import reward from './Assets/Reward.svg';
import user from './Assets/User.svg';
import ads from './Assets/Ads.svg';
import logout from './Assets/Logout.svg';
import './Assets/style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Collapse, NavbarToggler, Nav, Navbar } from 'reactstrap';

export default function NavbarCompAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="side-nav">
      <div className="nav-logo">
        <img src={logo} alt="" id="logo" />
      </div>
      <div className="sidebar">
        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <div className="side-nav"></div>
              <ul id="nav-content">
                <li class="nav-item">
                  <div className="user-profile">
                    <div id="user-pic">
                      <img src={logoOnly} alt="" />
                    </div>
                    <div className="user-namepoin">
                      <p id="user-name">Admin OABlood</p>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-beranda nav-content">
                    <img src={beranda} alt="" />
                    <Link to="/admin-beranda" className="nav-link" style={{ color: 'white' }}>
                      {' '}
                      Beranda{' '}
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-content">
                    <img src={ayoDonor} alt="" />
                    <Link  to="/admin-donor" className="nav-link" style={{ color: '#8A94A6;' }}>
                      {' '}
                      Donor{' '}
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-content">
                    <img src={reqDarah} alt="" />
                    <Link to="/admin-request" className="nav-link" style={{ color: '#8A94A6;' }}>
                      {' '}
                      Request{' '}
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-content">
                    <img src={reward} alt="" />
                    <Link to="/admin-reward" className="nav-link" style={{ color: '#8A94A6;' }}>
                      {' '}
                      Reward{' '}
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-content">
                    <img src={logout} alt="" />
                    <Link to="/" className="nav-link" style={{ color: '#8A94A6;' }}>
                      {' '}
                      Logout{' '}
                    </Link>
                  </div>
                </li>
              </ul>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}
