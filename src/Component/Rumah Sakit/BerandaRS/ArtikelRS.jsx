import React, { Component } from 'react';
import NavbarCompRS from '../NavbarCompRS/NavbarCompRS';
import CardArtikelInstansi from '../../PMI/BerandaPMI/CardArtikelInstansi';
import search from './Assets/search.svg';
import './Assets/style.css';

class ArtikelRS extends Component {
  state = {};
  render() {
    return (
      <div className="beranda-container">
        <div className="navbarComp">
          <NavbarCompRS />
        </div>
        <div className="beranda-content">
          <div className="bagian-atas container d-flex align-items-center m-3">
            <h3 className="ms-2 me-4 tulisan-reward">Beranda</h3>
            <div className="search-bar d-flex p-2 mx-2">
              <img src={search} alt="search" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Cari berita terkini tentang donor darah ..."></input>
            </div>
          </div>
          <div className="card-artikel">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <CardArtikelInstansi />
              <CardArtikelInstansi />
              <CardArtikelInstansi />
              <CardArtikelInstansi />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtikelRS;
