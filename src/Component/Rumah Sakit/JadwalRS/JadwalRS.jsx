import React, { Component } from 'react';
import NavbarCompRS from '../NavbarCompRS/NavbarCompRS';
import Pendonor from '../../PMI/JadwalPMI/Pendonor';
import search from './Assets/search.svg';
import './Assets/style1.css';
import axios from 'axios';

class JadwalRS extends Component {
  state = {
    post: []
  }

  componentDidMount() {
    axios.get('/rumah-sakit/pendonor').then(
      res => {
        console.log(res);
        this.setState({
          post: res.data
        })
      },
      err => {
        console.log(err);
      }
    )
  };

  render() {
    return (
      <div className="donor-container">
        <div className="navbarComp">
          <NavbarCompRS />
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
            <h2>Kelola kegiatanmu dengan mudah disini &#127881;</h2>
            <div className="search-bar-rs d-flex p-1">
              <img src={search} alt="search" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Cari berdasarkan Nama Pendonor atau ID"></input>
            </div>
            <div className="status-pendonor">
              <div className="header d-flex justify-content-evenly align-items-center">
                <p className="default-text">Nama Pendonor</p>
                <p className="default-text">#ID</p>
                <p className="default-text">Tanggal Kegiatan</p>
                <p className="default-text">Status Kegiatan</p>
              </div>
              <Pendonor />
              <Pendonor />
              <Pendonor />
              <Pendonor />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JadwalRS;
