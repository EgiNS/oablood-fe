import React, { Component } from 'react';
import teteh from './Assets/teteh.png';
import './Assets/style.css';

class Pendonor extends Component {
  state = {};
  render() {
    return (
      <div className="pendonor d-flex justify-content-around align-items-center">
        <div className="nama-pendonor d-flex align-items-around">
          <div className="profile-picture">
            <img src={teteh} alt="" className="pic" />
          </div>
          <div className="nama">
            <p className="default-text" style={{ fontWeight: '600' }}>
              (Lesya Borodina)
            </p>
            <button type="button" className="text-button">
              Lihat Profil Lengkap
            </button>
          </div>
        </div>
        <div className="id-pendonor">
          <p className="default-text">(123123123)</p>
        </div>
        <div className="tanggal-kegiatan">
          <p className="default-text">(12 Agustus 2021)</p>
        </div>
        <div className="status-kegiatan d-flex">
          <div className="button-selesai">
            <button type="button" className="btn">
              Selesaikan
            </button>
          </div>
          <div className="button-batal">
            <button type="button" className="btn">
              Batalkan
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pendonor;
