import React, { useState } from "react";
import logo from "./Assets/Logo.svg";
import ayoDonor from "./Assets/Donor.svg";
import poin from "./Assets/Poin.svg";
import beranda from "./Assets/Beranda.svg";
import reqDarah from "./Assets/Request.svg";
import reservasi from "./Assets/Reservasi.svg";
import reward from "./Assets/Reward.svg";
import user from "./Assets/User.svg";
import ads from "./Assets/Ads.svg";
import logout from "./Assets/Logout.svg";
import home from "./Assets/home.svg";
import "./Assets/Style.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { Collapse, NavbarToggler, Nav, Navbar } from "reactstrap";

export default function NavbarComp(props) {
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
                  <Link to="/profile" className="nav-link">
                    <div className="user-profile">
                      <div id="user-pic">
                        <img src={user} alt="" style={{ width: "2vw" }} />
                      </div>
                      <div className="user-namepoin">
                        <p id="user-name">{localStorage.getItem("name")}</p>
                        <div className="user-poin">
                          <img src={poin} alt="" />
                          <p id="user-count">
                            {" "}
                            <span id="point">
                              {" "}
                              {localStorage.getItem("point")}{" "}
                            </span>{" "}
                            Poin
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <div className="nav-content" id="0"> */}
                  <NavLink
                    to="/beranda"
                    className="nav-link nav-content"
                    // style={{ color: "white" }}
                    activeClassName="nav-active"
                  >
                    <img src={home} alt="" /> Beranda{" "}
                  </NavLink>
                </li>
                <li className="nav-item" style={{ borderRadius: "15px" }}>
                  <NavLink
                    to="/donor"
                    className="nav-link nav-content"
                    activeClassName="nav-active"
                  >
                    <img src={ayoDonor} alt="" /> Donor{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/request"
                    className="nav-link nav-content"
                    activeClassName="nav-active"
                  >
                    <img src={reqDarah} alt="" /> Request{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/reservasi"
                    className="nav-link nav-content"
                    activeClassName="nav-active"
                  >
                    <img src={reservasi} alt="" /> Reservasi{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/reward"
                    className="nav-link nav-content"
                    activeClassName="nav-active"
                  >
                    <img src={reward} alt="" /> Reward{" "}
                  </NavLink>
                </li>
                <div className="nav-ads">
                  <NavLink to="/upgrade">
                    {" "}
                    <img src={ads} alt="" />{" "}
                  </NavLink>
                </div>
                <li className="nav-item">
                  <div className="nav-content">
                    <img src={logout} alt="" />
                    <NavLink
                      to="/login"
                      className="nav-link"
                      style={{ color: "#8A94A6;" }}
                      onClick={() => localStorage.clear()}
                    >
                      {" "}
                      Logout{" "}
                    </NavLink>
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
