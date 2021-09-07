import React, { Component } from 'react';
import NavbarCompAdmin from '../NavbarCompAdmin/NavbarCompAdmin';
import CardDonorAdmin from './CardDonorAdmin';
import search from './Assets/search.svg';
import calendar from './Assets/calendar.svg';
import notification from './Assets/notification.svg';
import location from './Assets/location.svg';
import donorbg from './Assets/donorbg.svg';
import './Assets/style.css';
import axios from 'axios';

class DonorAdmin extends Component {
  state = {
    post: [],
  }

  componentDidMount = () => {
      axios.get('/event').then(
          res => {
              this.setState({
                post: res.data,
              })
          },
          err => {
              console.log(err);
          }
      )
  };
  
  render() {
    return (
      <div className="donor-container">
        <div className="navbarComp">
          <NavbarCompAdmin />
        </div>
        <div className="donor-content">
          <div className="bagian-atas container d-flex align-items-center m-3">
            <h3 className="ms-2 me-4 tulisan-reward">Donor</h3>
            <div className="search-bar d-flex p-2 mx-2">
              <img src={search} alt="search" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Cari berita terkini tentang donor darah ..."></input>
            </div>
            <div className="calendar p-2 mx-2">
              <button type="button" className="btn">
                <img src={calendar} alt="calendar" />
              </button>
            </div>
            <div className="notification p-2 mx-2">
              <button type="button" className="btn">
                <img src={notification} alt="notification" />
              </button>
            </div>
          </div>
          <div className="header-content d-flex">
            <div className="header-text m-3">
              <h2 className="ms-4">Ayo Donor dan Bantu Sesama &#128522;</h2>
              <div className="header-text-body ms-4">
                <h3 className="mb-3">Mengapa Kita Perlu Donor Darah ?</h3>
                <p className="muted-text">Kebutuhan yang besar : Setiap delapan detik, ada satu orang yang membutuhkan transfusi darah di Indonesia.</p>
                <p className="muted-text">Pemeriksaan kesehatan gratis : Sebelum mendonorkan darah, petugas akan memeriksa suhu tubuh, denyut nadi, tekanan darah dan kadar hemoglobin Anda.</p>
                <p className="muted-text">Tidak menyakitkan : Ya Anda memang akan merasa sakit. Namun, rasa sakit itu tidak seberapa dan akan hilang dengan cepat.</p>
                <h3 h3 className="mb-3">
                  Apa Yang Harus Kita Persiapkan Sebelum Donor ?
                </h3>
                <p className="muted-text">
                  Kita memerlukan tidur yang nyenyak di malam sebelum mendonor, sarapan pagi atau makan siang sebelum mendonor. Banyak minum seperti jus, susu sebelum mendonor. Rileks saat mendonor, dan banyak minum setelah mendonor. Kita
                  bisa melanjutkan kegiatan setelah mendonor, asal hindari aktivitas fisik yang berat.
                </p>
              </div>
            </div>
            <div className="header-bg m-3">
              <img src={donorbg} alt="" />
            </div>
          </div>
          <div className="body-content">
            <h2>Event Donor Darah di Sekitarmu &#127881;</h2>
            <div className="search-bar-rs d-flex p-1">
              <img src={location} alt="location" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Temukan event donor terdekat di sekitarmu ..."></input>
            </div>
            <div className="d-flex">
              <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
                {
                    this.state.post.map(post => {
                        return <CardDonorAdmin id_pmi={post.id_pmi} jadwal={post.jadwal} waktu={post.start} end={post.end} lokasi={post.lokasi} link={post.linkGmaps} image={post.image}/>
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DonorAdmin;
