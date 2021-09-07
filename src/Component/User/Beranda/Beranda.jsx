import React, { Component } from 'react';
import ToastBeranda from './ToastBeranda';
import NavbarComp from '../Navbar Component/NavbarComp';
import search from './Assets/search.svg';
import calendar from './Assets/calendar.svg';
import notification from './Assets/notification.svg';
import introbg from './Assets/introbg.svg';
import riwayatbg from './Assets/riwayatbg.svg';
import artikelcover from './Assets/artikelcover.png';
import desk from './Assets/desk.svg';
import facebook from './Assets/facebook.svg';
import twitter from './Assets/twitter.svg';
import instagram from './Assets/instagram.svg';
import './Assets/style.css';
import CardArtikel from './CardArtikel';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beranda extends Component {

    state = {
      post: []
  }

  componentDidMount(){
      axios.get('/user/artikel').then(
          res => {
              console.log(res);
              this.setState({
                  post: res.data
              })
          },
          err => {
              console.log(err);
          }
      )
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.name,
      email: this.email,
      pesan:  this.pesan,
      id_user: this.props.user.id
    }
    
    console.log(data);

    axios.post('user/komplain', data).then(
      (res) => {
        console.log("res", res);
        alert("Pesan Berhasil dikirim!");
      },
      err => {
        console.log("error", err)
        alert("Pesan gagal dikirim!");
      }
    )
  };

  render() {
    return (
      <div className="beranda-container">
        <div className="navbarComp">
          <NavbarComp></NavbarComp>
        </div>
        <div className="beranda-content">
          <div className="bagian-atas container d-flex m-3">
            <h3 className="ms-2 me-4 tulisan-reward">Beranda</h3>
            <div className="icon d-flex">
              <div className="search-bar d-flex p-2 mx-2">
                <img src={search} alt="search" />
                <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Cari berita terkini tentang donor darah ..."></input>
              </div>
              <div className="calendar p-2 mx-2">
                <Link to="/jadwaldonor">
                  <button type="button" className="btn">
                    <img src={calendar} alt="calendar" />
                  </button>
                </Link>
              </div>
              <div className="notification p-2 mx-2">
                <button type="button" className="btn">
                  <img src={notification} alt="notification" />
                </button>
              </div>
            </div>
          </div>
          <div className="greet-content d-flex">
            <div className="greet me-5">
              <p className="muted-text-greet">
                {/* {console.log("WOI", this.props.user.name,this.props.sapa)} */}
                Halo, <span className="username">{this.props.user.name}</span> &#128075;
              </p>
              <p className="muted-text">Rabu, 11 Agustus 2021</p>
            </div>
            <div className="iklan1 d-flex justify-content-center align-items-center">
              <p className=" teks-iklan">Space Iklan Hub 081234567</p>
            </div>
          </div>
          <div className="intro-content d-flex">
            <div className="intro-text d-flex">
              <div className="text">
                <h3>Apa itu OABlood?</h3>
                <p className="muted-text">OABlood adalah salah satu startup di Indonesia yang bergerak di bidang kesehatan. Bekerjasama dengan PMI serta pihak rumah sakit membuat para pendonor mudah dalam melakukan aktivitas donor darah</p>
                <Link to='/donor'>
                  <button type="button" class="button-donor btn">
                    Donor Sekarang
                  </button>
                </Link>
              </div>
              <div className="image">
                <img src={introbg} alt="intro" />
              </div>
            </div>
            <div className="riwayat-donor">
              <h3>Riwayat Donor Darah</h3>
              <div className="stats d-flex">
                <div className="stats-donor">
                  <div className="box-stats">
                    <p className="muted-text text-center">Donor Terakhir</p>
                    <p className="donor-terakhir text-center">{this.props.user.riwayat_donor}</p>
                  </div>
                  <div className="box-stats">
                    <p className="muted-text text-center">Donor Kembali</p>
                    <p className="donor-kembali text-center">{this.props.user.donor_kembali}</p>
                  </div>
                </div>
                <div className="image">
                  <img src={riwayatbg} alt="riwayat" />
                </div>
              </div>
            </div>
          </div>
          <div className="artikel-section">
            <div className="header d-flex justify-content-between align-items-center">
              <h3>Artikel Kesehatan</h3>
              <Link to="/artikel" style={{textDecoration:"none"}}><p className="text-button">Lihat Semua Artikel</p></Link>
            </div>
            <div className="artikel-kesehatan">
              <div className="row row-cols-1 row-cols-lg-4 g-4" style={{display:"flex", flexDirection:"row", alignItems:"center", alignContent:"stretch"}}>
                  {
                    this.state.post.map(post => {
                        return <CardArtikel judul={post.judul} link={post.link} image={post.image}/>
                    })
                  }
              </div>
            </div>
            <div className="feedback d-flex">
              <div className="filler">
                <img src={desk} alt="desk" />
                <div>
                  <p className="muted-text">
                    Emergency Call <p className="default-text">+628123456</p>
                  </p>
                </div>
                <div>
                  <p className="muted-text">
                    Contact <p className="default-text">OABlood@gmail.com</p>
                  </p>
                </div>
                <div>
                  <p className="muted-text">
                    Based In <p className="default-text">Bandung, Indonesia</p>
                  </p>
                </div>
                <div className="social-media d-flex justify-content-evenly">
                  <img src={facebook} alt="facebook" />
                  <img src={instagram} alt="instagram" />
                  <img src={twitter} alt="twitter" />
                </div>
              </div>
              <div className="form-feedback d-flex">
                <div className="left-side">
                  <h3>Perlu Bantuan ?</h3>
                  <input className="form-control input-text-feedback" type="text" placeholder="Nama Lengkap" aria-label="default input example" onChange={e => this.name = e.target.value}></input>
                  <input type="email" className="form-control input-text-feedback" id="exampleFormControlInput1" placeholder="Email" onChange={e => this.email = e.target.value}></input>
                  <textarea className="form-control text-area-feedback" id="exampleFormControlTextarea1" rows="3" placeholder="Ketik Pesanmu Disini ..." onChange={e => this.pesan = e.target.value}></textarea>
                  <button type="button" className="button-feedback btn" onClick={this.handleSubmit}>
                    Kirim Pesan
                  </button>
                </div>
                <div className="right-side">
                  <div className="iklan d-flex align-items-center m-3">
                    <div className="space-iklan d-flex align-items-center">
                      <p className=" teks-iklan text-center">Space Iklan Hub 081234567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastBeranda />
        </div>
      </div>
    );
  }
}

export default Beranda;
