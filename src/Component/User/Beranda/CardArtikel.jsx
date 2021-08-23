import React, { Component } from 'react';
import artikelcover from './Assets/artikelcover.png';
import './Assets/style.css';

class CardArtikel extends Component {
  state = {};
  render() {
    return (
      <div class="col">
        <div class="card">
          <img src={artikelcover} class="card-img-top" alt="cover" />
          <div class="card-body">
            <p className="muted-text">5 min read</p>
            <h3 className="judul-artikel">Kementerian ESDM Gelar Donor Darah dan Plasma Konvalesen</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default CardArtikel;
