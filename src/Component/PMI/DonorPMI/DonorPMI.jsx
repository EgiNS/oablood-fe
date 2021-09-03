import React, { Component } from 'react';
import NavbarCompPMI from '../NavbarCompPMI/NavbarCompPMI';
import CardDonorAdmin from '../../Admin/Donor Admin/CardDonorAdmin';
import search from './Assets/search.svg';
import calendar from './Assets/calendar.svg';
import notification from './Assets/notification.svg';
import location from './Assets/location.svg';
import buatevent from './Assets/buatevent.svg';
import { Link } from 'react-router-dom';
import './Assets/style.css';

class DonorPMI extends Component {
  state = {};
  render() {
    return (
      <div className="donor-container">
        <div className="navbarComp">
          <NavbarCompPMI />
        </div>
        <div className="donor-content">
          <div className="bagian-atas container d-flex align-items-center m-3">
            <h3 className="ms-2 me-4 tulisan-reward">Donor</h3>
            <div className="search-bar d-flex p-2 mx-2">
              <img src={search} alt="search" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Cari berita terkini tentang donor darah ..."></input>
            </div>
          </div>
          <div className="body-content">
            <div className="d-flex align-items-center header">
              <h2>Event Donor Darah di Sekitarmu &#127881;</h2>
              <Link to="pmi-buatevent">
              <button type="button" className="btn buat-event-button" style={{ marginLeft: '2.3rem' }}>
                <img src={buatevent} alt="" className="me-2" />
                Buat Event
              </button>
              </Link>
            </div>
            <div className="search-bar-rs d-flex p-1">
              <img src={location} alt="location" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Temukan event donor terdekat di sekitarmu ..."></input>
            </div>
            <div className="d-flex">
              <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
                <CardDonorAdmin />
                <CardDonorAdmin />
                <CardDonorAdmin />
                <CardDonorAdmin />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DonorPMI;
