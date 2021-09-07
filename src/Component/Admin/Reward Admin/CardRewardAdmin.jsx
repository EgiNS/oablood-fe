import React, { Component } from 'react';
import poin from './Assets/poin.svg';
import laptop from './Assets/laptop.jpg';
import HapusReward from './HapusReward';
import './Assets/style.css';
import Link from 'react-router-dom';

export default function CardRewardAdmin(props) {
  return (
    <div>
      <div className="reward col">
        <div className="card">
          <img src={`http://168.63.252.69:5000/uploads/${props.image}`} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text text-left teks-poin ">
              <img src={poin} alt="poin" /> {props.point}
            </p>
            <HapusReward id={props.id}/>
          </div>
        </div>
      </div>
    </div>
  )
}
