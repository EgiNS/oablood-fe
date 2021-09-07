import React, { Component } from 'react';
import Back from './Assets/back.svg';
import Call from './Assets/call.svg';
import House from './Assets/house.svg';
import Key from './Assets/key.svg';
import Mail from './Assets/mail.svg';
import Pencil from './Assets/pencil.svg';
import hospital from './Assets/hospital.svg';
import user from './Assets/user.svg';
import location from './Assets/location.svg';
import './Assets/style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BuatAkun extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const instansi = this.instansi

    const data = {
      name: this.name,
      alamat: this.alamat,
      no_telp:  this.no_telp,
      email: this.email,
      password: this.password,
    }
    
    console.log(data);

    if (instansi === "PMI") {
      axios.post('admin/buat-akun-pmi', data).then(
        (res) => {
          console.log("res", res);
          alert("Akun telah dibuat!");
        },
        err => {
          console.log("error", err.response);
          // alert(err.response.data.message");
        }
      )
    } else {
      axios.post('admin/buat-akun-rs', data).then(
        (res) => {
          console.log("res", res);
          alert("Akun telah dibuat!");
        },
        err => {
          console.log("error", err.response);
          // alert(err.response.data.message");
        }
      )
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="w-100 py-5">
          <Link to='/admin-beranda' style={{textDecoration:"none"}}>
            <a className="profil d-block" href="#">
              {' '}
              <img src={Back} alt="" /> Kembali ke Halaman Profil
            </a>         
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center g-3 mb-4">
            <div className="col-lg-4 left-side">
              <div className="edit-bag-1 container">
                <div className="picture container"></div>
                <p className="teks-pembantu">Pilih Instansi</p>
                <div className="d-flex mb-4 option-select">
                  <img src={hospital} alt="golongan darah" />
                  <select className="form-select opsi-gol-darah" aria-label="Default select example"  onChange={e => this.instansi = e.target.value}>
                    <option value="PMI">PMI</option>
                    <option value="RS">RS</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-side">
              <div className="edit-bag-2 container">
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Nama Institusi
                </label>
                <div className="d-flex form-informasi container">
                  <img src={user} alt="user" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-"  onChange={e => this.name = e.target.value}/>
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Alamat
                </label>
                <div className="d-flex form-informasi container">
                  <img src={House} alt="house" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-"  onChange={e => this.alamat = e.target.value}/>
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  No. Telepon
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Call} alt="call" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-"  onChange={e => this.no_telp = e.target.value}/>
                  <img src={Pencil} alt="pencil" />
                </div>

                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Email
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Mail} alt="mail" />
                  <input type="email" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-"  onChange={e => this.email = e.target.value}/>
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Password
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Key} alt="key" />
                  <input type="password" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-"  onChange={e => this.password = e.target.value}/>
                  <img src={Pencil} alt="pencil" />
                </div>
              </div>
            </div>
            <div className="d-grid col-lg-9 pt-3 mb-5 button-submit">
              <button className="btn simpan-perubahan" type="button" onClick={this.handleSubmit}>
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BuatAkun;
