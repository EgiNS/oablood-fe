import React, { Component } from 'react';
import NavbarComp from '../Navbar Component/NavbarComp';
import CardRequest from './CardRequest';
import search from './Assets/search.svg';
import calendar from './Assets/calendar.svg';
import notification from './Assets/notification.svg';
import location from './Assets/location.svg';
import './Assets/style.css';
import axios from 'axios';

class Request extends Component {
  state = {
    post: []
  }

  componentDidMount() {
    axios.get('/request').then(
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

  render() {
    return (
      <div className="request-container">
        <div className="navbarComp">
          <NavbarComp></NavbarComp>
        </div>
        <div className="request-content">
          <div className="bagian-atas container d-flex mx-3">
            <h3 className="ms-2 me-4 tulisan-reward">Request</h3>
            <div className="icon d-flex">
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
          </div>
          <div className="teks-intro m-3">
            <h2 className="ms-4 mb-4">Bantu Rumah Sakit yang membutuhkan darah &#127973;</h2>
          </div>
          <div className="search-bar-rs d-flex p-1">
            <img src={location} alt="location" />
            <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Temukan Rumah Sakit terdekat di sekitarmu ..."></input>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
            {
              this.state.post.map(post => {
                if (post.status === false) {
                  return <CardRequest nama={post.id_rs} image={post.image} goldar={post.golongan_darah} rhesus={post.rhesus} publish={post.createdAt} butuh={post.kebutuhan} terpenuhi={post.terpenuhi} link={post.linkGmaps}/>
                }
              })
            }
          </div>
        </div>
        <div className="iklan d-flex align-items-center m-3">
          <div className="space-iklan d-flex align-items-center">
            <p className=" teks-iklan text-center">Space Iklan Hub 081234567</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Request;
