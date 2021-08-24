import React, { Component } from 'react';
import NavbarCompAdmin from '../NavbarCompAdmin/NavbarCompAdmin';
import CardRewardAdmin from './CardRewardAdmin';
import search from './Assets/search.svg';
import calendar from './Assets/calendar.svg';
import notification from './Assets/notification.svg';
import rewardwhite from './Assets/rewardwhite.svg';
import poin from './Assets/poin.svg';
import laptop from './Assets/laptop.jpg';
import './Assets/style.css';

class RewardAdmin extends Component {
  state = {};

  render() {
    return (
      <div className="reward-container">
        <div className="navbarComp">
          <NavbarCompAdmin />
        </div>
        <div className="reward-content container">
          <div className="bagian-atas container d-flex align-items-center m-3 ">
            <h3 className="ms-2 me-4 tulisan-reward">Reward</h3>
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
          <div className="header d-flex align-items-center">
            <div className="urutkan d-flex p-2 m-4">
              <select className="form-select form-urut" aria-label="Default select example">
                <option value="Termurah">Termurah</option>
                <option value="Termahal">Termahal</option>
              </select>
            </div>
            <div className="buat-reward">
              <button type="button" className="btn buat-reward-button">
                <img src={rewardwhite} alt="reward" />
                Buat Reward
              </button>
            </div>
          </div>
          <div className="rewards row row-cols-1 row-cols-md-3 g-4 m-3">
            <CardRewardAdmin />
            <CardRewardAdmin />
            <CardRewardAdmin />
            <CardRewardAdmin />
            <CardRewardAdmin />
          </div>
        </div>
      </div>
    );
  }
}

export default RewardAdmin;
