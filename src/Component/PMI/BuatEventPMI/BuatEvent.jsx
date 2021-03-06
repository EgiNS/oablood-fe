import React, { Component } from 'react';
import location from './Assets/location.svg';
import link from './Assets/link.svg';
import clock from './Assets/clock.svg';
import calendar from './Assets/calendarred.svg';
import gallery from './Assets/gallery.svg';
import Pencil from './Assets/pencil.svg';
import Back from './Assets/back.svg';
import { Link } from 'react-router-dom';
import './Assets/style.css';
import axios from 'axios';

class BuatEvent extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      lokasi: this.lokasi,
      jadwal: this.jadwal,
      start:  this.start,
      end: this.end,
      image: this.image,
      linkGmaps: this.linkGmaps
    }
    
    console.log(data);

    axios.post('pmi/buat-event', data).then(
      (res) => {
        console.log("res", res);
        alert(res.response.data.message);
      },
      err => {
        console.log("error", err)
        alert(err.response.data.message);
      }
    )
  };

  render() {
    return (
      <div className="buat-artikel">
        <div className="w-100 py-5">
          <Link to="pmi-donor">
            <a className="profil d-block" href="">
              {' '}
              <img src={Back} alt="" /> Kembali ke Donor
            </a>
          </Link>
        </div>
        <div className="edit-bag-1">
          <div className="picture m-auto"></div>
          <div className="d-grid gap-2 mb-5">
            <button className="btn p-1 ganti-foto d-flex align-items-center" type="button">
              <img src={gallery} alt="gallery" className="me-2" />
              <input type="file" class="form-control ganti-thumbnail" id="inputGroupFile01" onChange={e => this.image = e.target.value}/>
            </button>
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Tanggal Event
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={calendar} alt="user" />
            <input type="date" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.jadwal = e.target.value}/>
            <img src={Pencil} alt="pencil" />
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Waktu
          </label>
          <div className="form-informasi d-flex container justify-content-evenly align-items-center">
            <img src={clock} alt="user" />
            <input type="time" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.start = e.target.value}/>
            <p className="teks-pembantu">sampai</p>
            <input type="time" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.end = e.target.value}/>
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Alamat
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={location} alt="user" />
            <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.lokasi = e.target.value}/>
            <img src={Pencil} alt="pencil" />
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Link Google Maps
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={link} alt="user" />
            <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.linkGmaps = e.target.value}/>
            <img src={Pencil} alt="pencil" />
          </div>
        </div>
        <div className=" d-grid button-submit">
          <button className="btn simpan-perubahan" type="button" onClick={this.handleSubmit}>
            Buat Event
          </button>
        </div>
      </div>
    );
  }
}

export default BuatEvent;
