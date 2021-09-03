import React, { Component } from "react";
import publish from "./Assets/publish.svg";
import location from "./Assets/location.svg";
import pengantri from "./Assets/pengantri.svg";
import eventdonor from "./Assets/eventdonor.png";
import "./Assets/style.css";

class CardJadwalDonor extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <div className="card card-container">
          <img
            src={eventdonor}
            alt="eventdonor"
            className="card-img-top mb-4"
          />
          <p className="lokasi-rs mb-4"></p>
          <p className="d-flex">
            <img src={publish} alt="publish" className="card-icon" />
            <span className="muted-text me-3">(13 Juli 2021)</span>
            <img src={pengantri} alt="pengantri" className="card-icon" />
            <span className="muted-text">Antrian (013)</span>
          </p>
          <p className="d-flex">
            <img src={location} alt="location" className="card-icon" />
            <span className="muted-text">
              Jl. Gembong No.20 - 30, Kapasan, Kec. Simokerto, Kota SBY, Jawa
              Timur
            </span>
          </p>
          <div className="d-grid w-100 mx-auto">
            <button class="btn card-button" id="button-daftar" type="button">
              Daftar Sekarang
            </button>
          </div>
          <a href="#" target="_blank" className="lihat-lokasi mb-3">
            Lihat Lokasi di Google Maps
          </a>
        </div>
      </div>
    );
  }
}

export default CardJadwalDonor;
