import React, { Component } from 'react';
import Back from './Assets/back.svg';
import { Link } from 'react-router-dom';
import './Assets/style.css';

class ProfileInstansi extends Component {
  state = {};
  render() {
    return (
      <div className="profile">
        <div className="w-100 py-5">
          <a href="#" className="jadwal">
            <img src={Back} alt="back" /> Kembali ke Jadwal
          </a>
        </div>
        <div className="container">
          <div className="row justify-content-center g-3">
            <div className="col-lg-4 left-side">
              <div className="profile-picture container p-2 mb-3">
                <div className="picture container my-3"></div>
                <p className="pt-3">Status Membership</p>
                <p className="status-member muted-text">(Basic Member)</p>
              </div>
            </div>
            <div className="col-lg-6 right-side">
              <div className="information container mb-4">
                {/*  kasih nama user */}
                <p className="halo d-inline-block my-3">
                  Halo, <span className="username">Joseph Widodo &#128075;</span>
                </p>
                <p className=" d-inline-block my-3"></p>
                <p className="explain">Disini kamu bisa melihat profil kamu secara lengkap</p>
                <div className="history d-flex justify-content-between">
                  <div className="container donor text-nowrap">
                    <p className="judul text-center mt-2">Total Donor</p>
                    <p className="info text-center">test</p>
                  </div>
                  <div className="container donor text-nowrap">
                    <p className="judul text-center mt-2">Donor Terakhir</p>
                    <p className="info text-center">test</p>
                  </div>
                  <div className="container donor text-nowrap">
                    <p className="judul text-center mt-2">Donor Kembali</p>
                    <p className="info text-center">test</p>
                  </div>
                </div>
                <p className="tentang-saya">Tentang Saya</p>
                <div className="jenis-kelamin detail-info w-100 mb-4">
                  Jenis Kelamin <span className="detail">test</span>
                </div>
                <div className="gol-darah detail-info w-100 mb-4">
                  Golongan Darah <span className="detail">test</span>
                </div>
                <div className="rhesus detail-info w-100 mb-4">
                  Rhesus <span className="detail">test</span>
                </div>
                <div className="ttl detail-info w-100 mb-4">
                  TTL <span className="detail">test</span>
                </div>
                <div className="no-telp detail-info w-100 mb-4">
                  No. Telepon <span className="detail">test</span>
                </div>
                <div className="alamat detail-info w-100 mb-4">
                  Alamat <span className="detail">test</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInstansi;
