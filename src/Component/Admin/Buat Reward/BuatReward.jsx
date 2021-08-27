import React, { Component } from 'react';
import rewardred from './Assets/rewardred.svg';
import shop from './Assets/shop.svg';
import gallery from './Assets/gallery.svg';
import Pencil from './Assets/pencil.svg';
import Back from './Assets/back.svg';
import './Assets/style.css';

class BuatReward extends Component {
  state = {};
  render() {
    return (
      <div className="buat-artikel">
        <div className="w-100 py-5">
          <a className="profil d-block" href="#">
            {' '}
            <img src={Back} alt="" /> Kembali ke Beranda
          </a>
        </div>
        <div className="edit-bag-1">
          <div className="picture m-auto"></div>
          <div className="d-grid gap-2 mb-5">
            <button className="btn p-1 ganti-foto d-flex align-items-center" type="button">
              <img src={gallery} alt="gallery" className="me-2" />
              <input type="file" class="form-control ganti-thumbnail" id="inputGroupFile01" />
            </button>
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Nama Barang
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={shop} alt="user" />
            <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
            <img src={Pencil} alt="pencil" />
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Poin yang dibutuhkan
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={rewardred} alt="user" />
            <input type="number" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
            <img src={Pencil} alt="pencil" />
          </div>
        </div>
        <div className=" d-grid button-submit">
          <button className="btn simpan-perubahan" type="button">
            Buat Reward
          </button>
        </div>
      </div>
    );
  }
}

export default BuatReward;
