import React, { Component } from 'react';
import NavbarCompRS from '../NavbarCompRS/NavbarCompRS';
import CardRequest from '../../User/Request/CardRequest';
import search from './Assets/search.svg';
import location from './Assets/location.svg';
import bloodwhite from './Assets/bloodwhite.svg';
import './Assets/style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RequestRS extends Component {
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
          <NavbarCompRS />
        </div>
        <div className="request-content">
          <div className="bagian-atas container d-flex align-items-center">
            <h3 className="ms-2 me-4 tulisan-reward">Request</h3>
            <div className="search-bar d-flex p-2 mx-2">
              <img src={search} alt="search" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Cari berita terkini tentang donor darah ..."></input>
            </div>
          </div>
          <div className="teks-intro m-3">
            <h2 className="ms-4 mb-4">Bantu Rumah Sakit yang membutuhkan darah &#127973;</h2>
          </div>
          <div className="bar d-flex align-items-center">
            <div className="search-bar-rs d-flex p-1">
              <img src={location} alt="location" />
              <input type="search" className=" form-search form-control" id="exampleFormControlInput1" placeholder="Temukan Rumah Sakit terdekat di sekitarmu ..."></input>
            </div>
            <Link to="/rs-buatrequest">
              <button type="button" className="btn" id="buat-request-button">
                <img src={bloodwhite} alt="" />
                Buat Request
              </button>
            </Link>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
            {
              this.state.post.map(post => {
                if (post.status === false) {
                  return <CardRequest id_rs={post.id_rs} image={post.image} goldar={post.golongan_darah} rhesus={post.rhesus} publish={post.createdAt} butuh={post.kebutuhan} terpenuhi={post.terpenuhi} link={post.linkGmaps}/>
                }
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default RequestRS;
