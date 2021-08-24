import React, { Component } from 'react';
import location from './Assets/location.svg';
import clock from './Assets/clock.svg';
import publish from './Assets/publish.svg';
import eventdonor from './Assets/eventdonor.png';
import './Assets/style.css';

class CardDonorAdmin extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <div className="card card-container">
          <img src={eventdonor} alt="eventdonor" className="card-img-top mb-4" />
          <p className="lokasi-rs mb-4">SMAK Kolese Santo Yusup - Persos Hwa Ind</p>
          <p className="d-flex">
            <img src={publish} alt="publish" className="card-icon" />
            <span className="muted-text me-3">(29 Agustus 2021)</span>
            <img src={clock} alt="clock" className="card-icon" />
            <span className="muted-text">(09.00 - 14.00)</span>
          </p>
          <p className="d-flex">
            <img src={location} alt="location" className="card-icon" />
            <span className="muted-text">(Aula SMAK Kolese Santo Yusup, Jl. Simpang Borobudur No.1, Kota Malang )</span>
          </p>
          <a href="https://www.google.com/maps/?hl=id" target="_blank" className="lihat-lokasi mb-3">
            Lihat Lokasi di Google Maps
          </a>
        </div>
      </div>
    );
  }
}

export default CardDonorAdmin;
