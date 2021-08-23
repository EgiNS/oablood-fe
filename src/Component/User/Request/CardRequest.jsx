import React, { Component } from 'react';
import rumahsakit2 from './Assets/rumahsakit2.png';
import bloodBag from './Assets/bloodBag.svg';
import publish from './Assets/publish.svg';
import blood from './Assets/blood.svg';
import rhesus from './Assets/rhesus.svg';
import './Assets/style.css';

class CardRequest extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <div className="card card-container">
          <img src={rumahsakit2} alt="rumahsakit" className="card-img-top mb-4" />
          <p className="lokasi-rs mb-4">TRumah Sakit RS William Booth Hospital Surabaya</p>
          <p className="d-flex">
            <img src={bloodBag} alt="bloodbag" className="card-icon" />
            <span className="muted-text me-4">(8) dari (16) kantong terpenuhi</span>
            {/* <span className="muted-text">Lihat Syarat Donor</span> */}
          </p>
          <p className="d-flex">
            <img src={blood} alt="golongan darah" className="card-icon" />
            <span className="muted-text me-3">Golongan Darah (AB)</span>
            <img src={rhesus} alt="rhesus" className="card-icon" />
            <span className="muted-text">Rhesus (+)</span>
          </p>
          <p className="d-flex">
            <img src={publish} alt="publish" className="card-icon" />
            <span className="muted-text">Dipublish pada tanggal (24 juni 2021)</span>
          </p>
          <a href="https://www.google.com/maps/?hl=id" target="_blank" className="lihat-lokasi mb-3">
            Lihat Lokasi di Google Maps
          </a>
        </div>
      </div>
    );
  }
}

export default CardRequest;
