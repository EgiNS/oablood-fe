import React, { useState } from 'react';
import logo from './Assets/Logo.svg';
import beranda from './Assets/Beranda.svg';
import reservasi from './Assets/Reservasi.svg';
import logors from './Assets/logors.svg';
import bloodgrey from './Assets/bloodgrey.svg';
import logout from './Assets/Logout.svg';
import './Assets/style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Collapse, NavbarToggler, Nav, Navbar } from 'reactstrap';

export default function NavbarCompRS() {
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
                      <img src={logors} alt="" />
                    </div>
                    <div className="user-namepoin">
                      <p id="user-name">Pihak Rumah Sakit</p>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-beranda nav-content">
                    <img src={beranda} alt="" />
                    <Link to="/rs-beranda" className="nav-link" style={{ color: 'white' }}>
                      {' '}
                      Beranda{' '}
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-content">
                    <img src={bloodgrey} alt="" />
                    <Link to="/rs-request" className="nav-link" style={{ color: '#8A94A6;' }}>
                      {' '}
                      Request{' '}
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-content">
                    <img src={reservasi} alt="" />
                    <Link to="/rs-jadwal" className="nav-link" style={{ color: '#8A94A6;' }}>
                      {' '}
                      Jadwal{' '}
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-content">
                    <img src={logout} alt="" />
                    <Link to="/login" className="nav-link" style={{ color: '#8A94A6;' }} onClick={() => localStorage.clear()}>
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
