import React, { Component } from 'react';
import rewardred from './Assets/rewardred.svg';
import shop from './Assets/shop.svg';
import gallery from './Assets/gallery.svg';
import Pencil from './Assets/pencil.svg';
import Back from './Assets/back.svg';
import './Assets/style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BuatReward extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      image: this.image,
      name: this.name,
      point:  this.point,
    }
    
    console.log(data);

    axios.post('admin/post-reward', data).then(
      (res) => {
        console.log("res", res);
        alert("Reward berhasil ditambahkan!");
      },
      err => {
        console.log("error", err)
        alert("Reward gagal ditambahkan!");
      }
    )
  };

  render() {
    return (
      <div className="buat-artikel">
        <div className="w-100 py-5">
          <Link to='/admin-reward' style={{textDecoration:"none"}}>
            <a className="profil d-block" href="#">
              {' '}
              <img src={Back} alt="" /> Kembali ke Beranda
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
            Nama Barang
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={shop} alt="user" />
            <input type="text" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.name = e.target.value}/>
            <img src={Pencil} alt="pencil" />
          </div>
          <label for="exampleFormControlInput1" className="form-label teks-pembantu my-3">
            Poin yang dibutuhkan
          </label>
          <div className="form-informasi d-flex container justify-content-evenly">
            <img src={rewardred} alt="user" />
            <input type="number" className="form-control informasi-detail" id="exampleFormControlInput1" placeholder="-" onChange={e => this.point = e.target.value}/>
            <img src={Pencil} alt="pencil" />
          </div>
        </div>
        <div className=" d-grid button-submit">
          <button className="btn simpan-perubahan" type="button" onClick={this.handleSubmit}>
            Buat Reward
          </button>
        </div>
      </div>
    );
  }
}

export default BuatReward;
