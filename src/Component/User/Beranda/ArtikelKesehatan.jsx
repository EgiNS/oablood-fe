import React, { Component } from 'react';
import NavbarComp from '../Navbar Component/NavbarComp';
import search from './Assets/search.svg';
import calendar from './Assets/calendar.svg';
import notification from './Assets/notification.svg';
import CardArtikel from './CardArtikel';
import './Assets/style.css';

class ArtikelKesehatan extends Component {
  state = {};
  render() {
    return (
      <div className="beranda-container">
        <div className="navbarComp">
          <NavbarComp></NavbarComp>
        </div>
        <div className="beranda-content">
          <div className="bagian-atas container d-flex align-items-center m-3">
            <h3 className="ms-2 me-4 tulisan-reward">Beranda</h3>
            <div className="search-bar d-flex p-2 mx-2">
              <img src={search} alt="search" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Cari berita terkini tentang donor darah ..."></input>
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
          <div className="card-artikel">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtikelKesehatan;
