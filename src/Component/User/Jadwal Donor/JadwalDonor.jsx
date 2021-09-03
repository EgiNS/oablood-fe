import React, { Component } from "react";
import NavbarComp from "../Navbar Component/NavbarFunct";
import CardJadwalDonor from "./CardJadwalDonor";
import "./Assets/style.css";
import calendar from "./Assets/calendar.svg";
import notification from "./Assets/notification.svg";
import search from "./Assets/search.svg";

class JadwalDonor extends Component {
  render() {
    return (
      <div className="donor-container w-100">
        <div className="navbarComp">
          <NavbarComp></NavbarComp>
        </div>
        <div className="donor-content w-100">
          <div className="bagian-atas d-flex align-items-center">
            <h3 className="ms-2 me-4 tulisan-reward">Beranda</h3>
            <div className="icon d-flex">
              <div className="search-bar d-flex p-2 mx-2">
                <img src={search} alt="search" />
                <input
                  type="search"
                  className=" form-search form-control"
                  id="exampleFormControlInput1"
                  placeholder="Cari berita terkini tentang donor darah ..."
                ></input>
              </div>
              <div className="calendar p-2 mx-2">
                <button type="button" className="btn">
                  <img src={calendar} alt="calendar" />
                </button>
              </div>
              <div className="notification p-2 mx-2">
                <button type="button" className="btn">
                  <img src={notification} alt="notification" />
                </button>
              </div>
            </div>
          </div>
          <div className="body-content">
            <h2 className="ms-3">Jadwal Donor</h2>
            <div className="d-flex artikel">
              <div className="row row-cols-1 row-cols-md-1 g-4 m-3">
                <CardJadwalDonor />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JadwalDonor;
