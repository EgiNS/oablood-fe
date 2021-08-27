import React, { Component } from 'react';
import blood from './Assets/blood.svg';
import bloodbagred from './Assets/bloodbagred.svg';
import gallery from './Assets/gallery.svg';
import link from './Assets/link.svg';
import rhesusred from './Assets/rhesusred.svg';
import pencil from './Assets/pencil.svg';
import back from './Assets/back.svg';
import './Assets/style.css';

class BuatRequest extends Component {
  state = {};
  render() {
    return (
      <div className="buat-request">
        <div className="w-100 py-5">
          <a className="profil d-block" href="#">
            {' '}
            <img src={back} alt="" /> Kembali ke Donor
          </a>
        </div>
        <div className="request-form">
          <div className="left-side">
            <div className="picture"></div>
            <button className="btn p-1 ganti-foto d-flex align-items-center" type="button">
              <img src={gallery} alt="gallery" className="me-2" />
              <input type="file" class="form-control ganti-thumbnail" id="inputGroupFile01" />
            </button>
            <label for="exampleFormControlInput1" className="form-label muted-text">
              Kantong Darah yang Dibutuhkan
            </label>
            <div className="form-informasi d-flex container justify-content-evenly">
              <img src={bloodbagred} alt="user" />
              <input type="number" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
              <img src={pencil} alt="pencil" />
            </div>
            <label for="exampleFormControlInput1" className="form-label muted-text">
              Golongan Darah
            </label>
            <div className="d-flex option-select container justify-content-around">
              <img src={blood} alt="golongan darah" />
              <select className="form-select opsi-gol-darah" aria-label="Default select example">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O">O</option>
                <option value="AB">AB</option>
              </select>
            </div>
            <label for="exampleFormControlInput1" className="form-label muted-text">
              Rhesus
            </label>
            <div className="d-flex option-select container justify-content-around">
              <img src={rhesusred} alt="rhesus" />
              <select className="form-select opsi-rhesus" aria-label="Default select example">
                <option value="+">+</option>
                <option value="-">-</option>
              </select>
            </div>
            <label for="exampleFormControlInput1" className="form-label muted-text">
              Link Google Maps
            </label>
            <div className="form-informasi d-flex container justify-content-evenly">
              <img src={link} alt="link" />
              <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
              <img src={pencil} alt="pencil" />
            </div>
          </div>
          <div className="right-side">
            <label for="exampleFormControlInput1" className="form-label muted-text">
              Syarat Khusus
            </label>
            <div className="form-informasi d-flex container justify-content-evenly">
              <textarea name="syarat-khusus_text" id="syarat-khusus" placeholder="-"></textarea>
              <img src={pencil} alt="pencil" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuatRequest;
