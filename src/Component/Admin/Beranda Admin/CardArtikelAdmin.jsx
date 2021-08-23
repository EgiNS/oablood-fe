import React, { Component } from 'react';
import ModalBerandaAdmin from './ModalBerandaAdmin';
import artikelcover from './Assets/artikelcover.png';
import './Assets/style.css';

class CardArtikelAdmin extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <div className="card card-container">
          <img src={artikelcover} alt="artikelcover" className="card-img-top mb-4" />
          <p className="muted-text">5 min read</p>
          <p className="lokasi-rs mb-4">TRumah Sakit RS William Booth Hospital Surabaya</p>
          <ModalBerandaAdmin />
        </div>
      </div>
    );
  }
}

export default CardArtikelAdmin;
