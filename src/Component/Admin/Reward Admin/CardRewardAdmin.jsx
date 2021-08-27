import React, { Component } from 'react';
import poin from './Assets/poin.svg';
import laptop from './Assets/laptop.jpg';
import HapusReward from './HapusReward';
import './Assets/style.css';
import Link from 'react-router-dom';

class CardRewardAdmin extends Component {
  state = {};
  render() {
    return (
      <div className="reward col">
        <div className="card">
          <img src={laptop} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Contoh Hadiah</h5>
            <p className="card-text text-left teks-poin ">
              <img src={poin} alt="poin" /> 999 Poin
            </p>
            <HapusReward />
          </div>
        </div>
      </div>
    );
  }
}

export default CardRewardAdmin;
