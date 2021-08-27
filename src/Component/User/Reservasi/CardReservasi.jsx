import React, { Component } from 'react';
import blood from './Assets/blood.svg';
import pengantri from './Assets/pengantri.svg';
import rhesus from './Assets/rhesus.svg';
import rumahsakit1 from './Assets/rumahsakit1.png';
import ModalReservasi from './ModalReservasi';
import './Assets/style.css';

class cardReservasi extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <div className="card card-container">
          <img src={rumahsakit1} alt="rumahsakit" className="card-img-top mb-4" />
          <p className="lokasi-rs mb-4">TC Mega Grosir Surabaya - Hadasa Community</p>
          <p className="d-flex">
            <img src={pengantri} alt="pengantri" className="card-icon" />
            <span className="muted-text me-4">(angka) pengantri</span>
            {/* <span className="muted-text">Lihat Syarat Donor</span> */}
            <span>
              <ModalReservasi className="modal-lg" />
            </span>
          </p>
          <p className="d-flex">
            <img src={blood} alt="golongan darah" className="card-icon" />
            <span className="muted-text me-3">Golongan Darah (AB)</span>
            <img src={rhesus} alt="rhesus" className="card-icon" />
            <span className="muted-text">Rhesus (+)</span>
          </p>
          <div className="d-grid w-100 mx-auto">
            <button class="btn card-button" type="button">
              Booking Jadwal
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default cardReservasi;
