import React, { Component } from 'react';
import logo from './Assets/Logo.svg';
import upgradebg from './Assets/upgradebg.svg';
import './Assets/styleUpgradePro.css';

class UpgradePro extends Component {
  state = {};
  render() {
    return (
      <div className="upgrade-pro">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="upgrade-content d-flex">
          <div className="content">
            <h3 className="judul">Dapatkan Promo Terbaik dari Kami 🔥</h3>
            <h4 className="keuntungan">Tanpa Antrian Donor</h4>
            <p className="penjelasan">Bosen nunggu antrian saat donor darah? tenang! Dengan bergabung menjadi Pro Member, ga usah takut lagi ngantri</p>
            <h4 className="keuntungan">Tanpa Iklan</h4>
            <p className="penjelasan">Merasa keganggu saat mengakses website kami karena iklan disana sini? Say No to Iklan ketika anda sudah menjadi Pro Member</p>
            <h4 className="keuntungan">2x Poin Multiplier</h4>
            <p className="penjelasan">Pengen cepet redeem reward dari kami tapi ga mau nunggu lama? Pro Member solusinya, dapatkan 2x Poin Multiplier saat donor selesai</p>
            <button type="button" className="btn button-upgrade">
              Hubungi Admin Sekarang
            </button>
          </div>
          <div className="image">
            <img src={upgradebg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default UpgradePro;
