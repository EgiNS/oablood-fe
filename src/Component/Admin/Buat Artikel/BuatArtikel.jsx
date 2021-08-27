import React, { Component } from 'react';
import clock from './Assets/clock.svg';
import gallery from './Assets/gallery.svg';
import judul from './Assets/judul.svg';
import link from './Assets/link.svg';
import Pencil from './Assets/pencil.svg';
import Back from './Assets/back.svg';
import './Assets/style.css';

class BuatArtikel extends Component {
  state = {};
  render() {
    return (
      <div className="buat-artikel">
        <div className="w-100 py-5">
          <a className="profil d-block" href="#">
            {' '}
            <img src={Back} alt="" /> Kembali ke Halaman Profil
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
            Perkiraan Waktu Baca (Menit)
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={clock} alt="user" />
            <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
            <img src={Pencil} alt="pencil" />
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Judul Artikel
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={judul} alt="user" />
            <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
            <img src={Pencil} alt="pencil" />
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Link Artikel
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={link} alt="user" />
            <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" />
            <img src={Pencil} alt="pencil" />
          </div>
          <div className="d-grid pt-3 mb-5 button-submit">
            <button className="btn simpan-perubahan" type="button">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BuatArtikel;
