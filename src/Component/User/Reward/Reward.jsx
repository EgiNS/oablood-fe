import React, { Component } from 'react';
import NavbarComp from '../Navbar Component/NavbarComp';
import CardReward from './card';
import search from './Assets/search.svg';
import calendar from './Assets/calendar.svg';
import notification from './Assets/notification.svg';
import poin from './Assets/poin.svg';
import laptop from './Assets/laptop.jpg';
import './Assets/style.css';
import axios from 'axios';
import card from './card';

class Reward extends Component {
  state = {
    post: []
  }

  componentDidMount() {
    axios.get('/user/reward').then(
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
      <div className="reward-container">
        <div className="navbarComp">
          <NavbarComp />
        </div>
        <div className="reward-content container">
          <div className="bagian-atas container d-flex m-3 ">
            <h3 className="ms-2 me-4 tulisan-reward">Reward</h3>
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
          <div className="urutkan p-1 m-3">
            <select className="form-select form-urut" aria-label="Default select example">
              <option value="Termurah">Termurah</option>
              <option value="Termahal">Termahal</option>
            </select>
          </div>
          <div className="rewards row row-cols-1 row-cols-md-3 g-4 m-3">
            {
              this.state.post.map(post => {
                return <CardReward  id={post.id} image={post.image} name={post.name} point={post.point} point_user={this.props.user.point}/>
              })
            }
            {/* <CardReward />
            <CardReward />
            <CardReward />
            <CardReward /> */}
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

export default Reward;
