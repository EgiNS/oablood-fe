import React, { Component } from 'react';
import Back from './Assets/back.svg';
import { Link } from 'react-router-dom';
import './Assets/style1.css';

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="profile">
        <div className="w-100 py-5">
          <Link to="/dashboard" className="dashboard">
            <img src={Back} alt="back" /> Kembali ke Dashboard
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center g-3">
            <div className="col-lg-4 left-side">
              <div className="profile-picture container p-2 mb-3">
                <div className="picture container my-3"></div>
                <div className="d-grid gap-2">
                  <button className="btn p-1 edit-profile" type="button">
                    Sunting Profil Anda
                  </button>
                </div>
              </div>
              <div className="progress-profile container mb-3">
                <p className="pt-3">Lengkapi Profilmu</p>
                <div className="progress mb-2">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="text-center progress-percent">50%</p>
              </div>
              <div className="membership container mb-3">
                <p className="pt-3">Status Membership</p>
                <div className="d-flex justify-content-evenly">
                  <div className="d-inline-block basic m-2">Basic Member</div>
                  <a href="#" className="btn d-inline-block upgrade p-2">
                    Upgrade Member
                  </a>
                </div>
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
                <div className="email detail-info w-100 mb-4">
                  Email <span className="detail">test</span>
                </div>
                <div className="password detail-info w-100 mb-4">
                  Password <span className="detail">test</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
