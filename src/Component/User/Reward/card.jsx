import React, { Component } from 'react';
import poin from './Assets/poin.svg';
import laptop from './Assets/laptop.jpg';
import ModalHadiah from './modalHadiah';
import './Assets/style.css';
import Link from 'react-router-dom';

class CardReward extends Component {
  state = {};
  render() {
    return (
      <div className="reward col">
        <div className="card">
          <img src={laptop} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Contoh Hadiah</h5>
            <ModalHadiah />
          </div>
        </div>
      </div>
    );
  }
}

export default CardReward;
