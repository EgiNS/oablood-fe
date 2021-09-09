import React, { Component } from "react";
import "./Assets/style.css";
import Logo from "./Assets/Logo.svg";
import bgdoctor from "./Assets/bgdoctor.svg";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="landing-page">
        <img src={Logo} alt="OABlood" className="logo-oablood" />
        <div className="content d-flex">
          <div className="left-side">
            <img src={bgdoctor} alt="" className="bgdoctor" />
          </div>
          <div className="right-side d-flex">
            <div className="welcome">
              <h3 className="bold-text">
                Hanya disini kamu bisa donor darah dengan mudah dan cepat
              </h3>
              <p className="text-mute">
                Bosen ngantri lama saat kegiatan donor darah? Tenang! dengan
                OAblood kamu bisa booking jadwal dulu
              </p>
              <Link to='/login'>
                <button type="button" className="btn button-landing">
                  Coba Sekarang
                </button>            
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
