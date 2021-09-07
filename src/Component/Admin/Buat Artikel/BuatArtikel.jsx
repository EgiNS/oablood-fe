import React, { Component } from 'react';
import clock from './Assets/clock.svg';
import gallery from './Assets/gallery.svg';
import judul from './Assets/judul.svg';
import link from './Assets/link.svg';
import Pencil from './Assets/pencil.svg';
import Back from './Assets/back.svg';
import './Assets/style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BuatArtikel extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      image: this.image,
      judul: this.judul,
      link:  this.link,
    }
    
    console.log(data);

    axios.post('admin/post-artikel', data).then(
      (res) => {
        console.log("res", res);
        alert("Artikel berhasil dibuat!");
      },
      err => {
        console.log("error", err)
        alert("Artikel gagal dibuat!");
      }
    )
  };

  render() {
    return (
      <div className="buat-artikel">
        <div className="w-100 py-5">
          <Link to='/admin-beranda' style={{textDecoration:"none"}}>
            <a className="profil d-block" href="#">
              {' '}
              <img src={Back} alt="" /> Kembali ke Halaman Profil
            </a>
          </Link>
        </div>
        <div className="edit-bag-1">
          <div className="picture m-auto"></div>
          <div className="d-grid gap-2 mb-5">
            <button className="btn p-1 ganti-foto d-flex align-items-center" type="button">
              <img src={gallery} alt="gallery" className="me-2" />
              <input type="file" class="form-control ganti-thumbnail" id="inputGroupFile01" onChange={e => this.image = e.target.value}/>
            </button>
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Judul Artikel
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={judul} alt="user" />
            <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.judul = e.target.value}/>
            <img src={Pencil} alt="pencil" />
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Link Artikel
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={link} alt="user" />
            <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.link = e.target.value}/>
            <img src={Pencil} alt="pencil" />
          </div>
          <div className="d-grid pt-3 mb-5 button-submit">
            <button className="btn simpan-perubahan" type="button" onClick={this.handleSubmit}>
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BuatArtikel;
