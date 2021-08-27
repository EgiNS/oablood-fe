import React, { Component } from 'react';
import Back from './Assets/back.svg';
import Blood from './Assets/blood.svg';
import Cake from './Assets/cake.svg';
import Call from './Assets/call.svg';
import House from './Assets/house.svg';
import Key from './Assets/key.svg';
import Location from './Assets/location.svg';
import Mail from './Assets/mail.svg';
import Pencil from './Assets/pencil.svg';
import Rhesus from './Assets/rhesus.svg';
import Sex from './Assets/sex.svg';
import User from './Assets/user.svg';
import './Assets/style.css';

class EditProfile extends Component {
  state = {};
  render() {
    return (
      <div className="edit-profile">
        <div className="w-100 py-5">
          <a className="profil d-block" href="#">
            {' '}
            <img src={Back} alt="" /> Kembali ke Halaman Profil
          </a>
        </div>
        <div className="container">
          <div className="row justify-content-center g-3 mb-4">
            <div className="col-lg-4 left-side">
              <div className="edit-bag-1 container">
                <div className="picture container"></div>
                <div className="d-grid gap-2 mb-5">
                  <button className="btn p-1 ganti-foto" type="button">
                    Sunting Profil Anda
                  </button>
                </div>
                <p className="teks-pembantu">Jenis Kelamin</p>
                <div className="container d-flex justify-content-between mb-4">
                  <img src={Sex} alt="Jenis Kelamin" className="me-3" />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input check-radio" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label jenis-kelamin" for="inlineRadio1">
                      Pria
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input check-radio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label jenis-kelamin" for="inlineRadio2">
                      Wanita
                    </label>
                  </div>
                </div>
                <p className="teks-pembantu">Golongan Darah</p>
                <div className="d-flex mb-4 option-select">
                  <img src={Blood} alt="golongan darah" />
                  <select className="form-select opsi-gol-darah" aria-label="Default select example">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="O">O</option>
                    <option value="AB">AB</option>
                  </select>
                </div>
                <p className="teks-pembantu">Rhesus</p>
                <div className="d-flex mb-4 option-select">
                  <img src={Rhesus} alt="rhesus" />
                  <select className="form-select opsi-rhesus" aria-label="Default select example">
                    <option value="1">-</option>
                    <option value="2">+</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-side">
              <div className="edit-bag-2 container">
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Nama Lengkap
                </label>
                <div className="form-informasi d-flex container justify-content-evenly">
                  <img src={User} alt="user" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Tempat Lahir
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Location} alt="location" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Tanggal Lahir
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Cake} alt="cake" />
                  <input type="date" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  No. Telepon
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Call} alt="call" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Alamat
                </label>
                <div className="d-flex form-informasi container">
                  <img src={House} alt="house" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Email
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Mail} alt="mail" />
                  <input type="email" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Password
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Key} alt="key" />
                  <input type="password" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
                  <img src={Pencil} alt="pencil" />
                </div>
              </div>
            </div>
            <div className="d-grid col-lg-9 pt-3 mb-5 button-submit">
              <button className="btn simpan-perubahan" type="button">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
