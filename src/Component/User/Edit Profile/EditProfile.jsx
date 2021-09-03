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
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditProfile extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: this.props.user.id,
      alamat: this.alamat,
      // email: this.props.user.email,
      golongan_darah: this.golongan_darah,
      // image: this.props.user.image,
      jenis_kelamin: this.jenis_kelamin,
      name: this.props.user.name,
      no_telp: this.no_telp,
      rhesus: this.rhesus,
      tanggal_lahir: this.tanggal_lahir,
      tempat_lahir: this.tempat_lahir,
    }
    
    console.log(data);

    axios.put(`/user/profile/${this.props.user.id}`, data).then(
      (res) => {
        console.log("resPut", res);
      },
      err => {
          console.log("error bos", err)
          console.log(err);
      }
    )
  };
  
  // state = {
  //     alamat: "",
  //     createdAt: this.props.user.createdAt,
  //     donor_kembali: this.props.user.donor_kembali,
  //     email: this.props.user.email,
  //     golongan_darah: "",
  //     id: this.props.user.id,
  //     image: this.props.user.image,
  //     jenis_kelamin: "",
  //     name: this.props.user.name,
  //     no_telp: "",
  //     password: this.props.user.password,
  //     point: this.props.user.point,
  //     rhesus: "",
  //     riwayat_donor: this.props.user.riwayat_donor,
  //     role: this.props.user.role,
  //     tanggal_lahir: "",
  //     tempat_lahir: "",
  //     totalDonor: "",
  //     updatedAt: this.props.user.updatedAt
  // };


  // putData() {
  //   axios.put(`/user/profile/${this.state.id}`, this.state).then(
  //     (res) => {
  //       console.log("resPut", res);
  //     },
  //     err => {
  //         console.log("error bos", this.state)
  //         console.log(err);
  //     }
  //   )
  // }

  render() {
    return (
      <div className="edit-profile">
        <div className="w-100 py-5">
          <Link to="/profile">
            <a className="profil d-block" href="#">
              {' '}
              <img src={Back} alt="" /> Kembali ke Halaman Profil
            </a>
          </Link>
        </div>
        <div className="container" onSubmit={this.handleSubmit}>
          <div className="row justify-content-center g-3 mb-4">
            <div className="col-lg-4 left-side">
              <div className="edit-bag-1 container">
                <div className="picture container">
                  <img src={User} alt="" width="150px" style={{ margin: "18%" }} />
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Unggah Foto Profil</label>
                  <input class="form-control" type="file" id="formFile"/>
                </div>
                <div className="d-grid gap-2 mb-5">
                  <button className="btn p-1 ganti-foto" type="button">
                    Sunting Profil Anda
                  </button>
                </div>
                <p className="teks-pembantu">Jenis Kelamin</p>
                <div className="container d-flex justify-content-between mb-4">
                  <img src={Sex} alt="Jenis Kelamin" className="me-3" />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input check-radio" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={e => this.jenis_kelamin = "L"}/>
                    <label className="form-check-label jenis-kelamin" for="inlineRadio1">
                      Pria
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input check-radio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={e => this.jenis_kelamin = "P"}/>
                    <label className="form-check-label jenis-kelamin" for="inlineRadio2">
                      Wanita
                    </label>
                  </div>
                </div>
                <p className="teks-pembantu">Golongan Darah</p>
                <div className="d-flex mb-4 option-select">
                  <img src={Blood} alt="golongan darah" />
                  <select className="form-select opsi-gol-darah" aria-label="Default select example" onChange={e => this.golongan_darah = e.target.value}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="O">O</option>
                    <option value="AB">AB</option>
                  </select>
                </div>
                <p className="teks-pembantu">Rhesus</p>
                <div className="d-flex mb-4 option-select">
                  <img src={Rhesus} alt="rhesus" />
                  <select className="form-select opsi-rhesus" aria-label="Default select example" onChange={e => this.rhesus = e.target.value}>
                    <option value="-">-</option>
                    <option value="+">+</option>
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
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-"  value={this.props.user.name} onChange={e => this.name = e.target.value}/>
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Tempat Lahir
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Location} alt="location" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.tempat_lahir = e.target.value}/>
                  {/* {console.log(this.state.tempat_lahir)} */}
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Tanggal Lahir
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Cake} alt="cake" />
                  <input type="date" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.tanggal_lahir = e.target.value}/>
                  {/* {console.log(this.state.tanggal_lahir)} */}
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  No. Telepon
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Call} alt="call" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.no_telp = e.target.value}/>
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Alamat
                </label>
                <div className="d-flex form-informasi container">
                  <img src={House} alt="house" />
                  <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.alamat = e.target.value}/>
                  <img src={Pencil} alt="pencil" />
                </div>
                <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Email
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Mail} alt="mail" />
                  <input type="email" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" value={this.props.user.email} />
                  <img src={Pencil} alt="pencil" />
                </div>
                {/* <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
                  Password
                </label>
                <div className="d-flex form-informasi container">
                  <img src={Key} alt="key" />
                  <input type="password" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
                  <img src={Pencil} alt="pencil" />
                </div> */}
              </div>
            </div>
            <div className="d-grid col-lg-9 pt-3 mb-5 button-submit" style={{marginTop:"13%"}}>
              <button className="btn simpan-perubahan" type="button" onClick={this.handleSubmit}>
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
