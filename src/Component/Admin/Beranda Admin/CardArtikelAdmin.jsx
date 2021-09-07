import React, { Component } from 'react';
import ModalBerandaAdmin from './ModalBerandaAdmin';
import artikelcover from './Assets/artikelcover.png';
import './Assets/style.css';

export default function CardArtikelAdmin(props) {
  return (
    <div>
      <div className="col">
        <div className="card card-container">
          <img src={`http://168.63.252.69:5000/uploads/${props.image}`} alt="artikelcover" className="card-img-top mb-4" />
          <p className="muted-text">5 min read</p>
          <p className="lokasi-rs mb-4">{props.judul}</p>
          <ModalBerandaAdmin id={props.id}/>
        </div>
      </div>
    </div>
  )
}
