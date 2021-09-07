import React, { Component } from 'react';
import NavbarCompPMI from '../NavbarCompPMI/NavbarCompPMI';
import CardArtikelInstansi from './CardArtikelInstansi';
import search from './Assets/search.svg';
import calendar from './Assets/calendar.svg';
import notification from './Assets/notification.svg';
import introbg from './Assets/introbg.svg';
import artikelcover from './Assets/artikelcover.png';
import desk from './Assets/desk.svg';
import facebook from './Assets/facebook.svg';
import twitter from './Assets/twitter.svg';
import instagram from './Assets/instagram.svg';
import user1 from './Assets/user1.svg';
import buatartikel from './Assets/buat-artikel.svg';
import './Assets/style.css';
import { Link } from 'react-router-dom';

class BerandaPMI extends Component {
  state = {};
  render() {
    return (
      <div className="beranda-pmi-container">
        <div className="navbarComp">
          <NavbarCompPMI />
        </div>
        <div className="beranda-pmi-content">
          <div className="bagian-atas container d-flex align-items-center m-3">
            <h3 className="ms-2 me-4 tulisan-reward">Beranda</h3>
            <div className="search-bar d-flex p-2 mx-2">
              <img src={search} alt="search" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Cari berita terkini tentang donor darah ..."></input>
            </div>
          </div>
          <div className="greet-content d-flex">
            <div className="greet me-5">
              <p className="muted-text-greet">
                Halo, <span className="username">{this.props.user.name}</span> &#128075;
              </p>
              <p className="muted-text">Rabu, 11 Agustus 2021</p>
            </div>
          </div>
          <div className="intro-content d-flex w-75">
            <div className="intro-text d-flex">
              <div className="text">
                <h3>Apa itu OABlood?</h3>
                <p className="muted-text">OABlood adalah salah satu startup di Indonesia yang bergerak di bidang kesehatan. Bekerjasama dengan PMI serta pihak rumah sakit membuat para pendonor mudah dalam melakukan aktivitas donor darah</p>
                <Link to='/pmi-buatevent' style={{textDecoration:"none"}}>
                  <button type="button" class="d-grid button-donor btn">
                    Buat Event
                  </button>
                </Link>
              </div>
              <div className="image">
                <img src={introbg} alt="intro" />
              </div>
            </div>
          </div>
          <div className="artikel-section">
            <div className="header d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h3 className="me-4">Artikel Kesehatan</h3>
              </div>
              <p className="text-button">Lihat Semua Artikel</p>
            </div>
            <div className="artikel-kesehatan">
              <div className="row row-cols-1 row-cols-lg-4 g-4">
                <CardArtikelInstansi />
                <CardArtikelInstansi />
                <CardArtikelInstansi />
                <CardArtikelInstansi />
              </div>
            </div>
            <div className="feedback d-flex">
              <div className="filler">
                <img src={desk} alt="desk" />
                <div>
                  <p className="muted-text">
                    Emergency Call <p className="default-text">+628123456</p>
                  </p>
                </div>
                <div>
                  <p className="muted-text">
                    Contact <p className="default-text">OABlood@gmail.com</p>
                  </p>
                </div>
                <div>
                  <p className="muted-text">
                    Based In <p className="default-text">Bandung, Indonesia</p>
                  </p>
                </div>
                <div className="social-media d-flex justify-content-evenly">
                  <img src={facebook} alt="facebook" />
                  <img src={instagram} alt="instagram" />
                  <img src={twitter} alt="twitter" />
                </div>
              </div>
              <div className="form-feedback d-flex">
                <div className="left-side">
                  <h3>Perlu Bantuan ?</h3>
                  <input className="form-control input-text-feedback" type="text" placeholder="Nama Lengkap" aria-label="default input example"></input>
                  <input type="email" className="form-control input-text-feedback" id="exampleFormControlInput1" placeholder="Email"></input>
                  <textarea className="form-control text-area-feedback" id="exampleFormControlTextarea1" rows="3" placeholder="Ketik Pesanmu Disini ..."></textarea>
                  <button type="button" className="button-feedback btn">
                    Donor Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BerandaPMI;
