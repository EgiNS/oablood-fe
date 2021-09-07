import React, { Component } from 'react';
import location from './Assets/location.svg';
import clock from './Assets/clock.svg';
import publish from './Assets/publish.svg';
import eventdonor from './Assets/eventdonor.png';
import './Assets/style.css';
import axios from 'axios';

class CardDonorAdmin extends Component {
  state = {};

  componentDidMount() {
    axios.get(`pmi/profile-pmi/${this.props.id_pmi}`).then(
      res => {
        console.log(res);
        this.setState({
          name: res.data.profile.name,
        })
      },
      err => {
        console.log(err);
      }
    )
  }

  render() {
    return (
      <div className="col">
        <div className="card card-container">
          <img src={`http://168.63.252.69:5000/uploads/${this.props.image}`} alt="eventdonor" className="card-img-top mb-4" />
          <p className="lokasi-rs mb-4">{this.state.name}</p>
          <p className="d-flex">
            <img src={publish} alt="publish" className="card-icon" />
            <span className="muted-text me-3">{this.props.jadwal}</span>
            <img src={clock} alt="clock" className="card-icon" />
            <span className="muted-text">{this.props.waktu} - {this.props.end}</span>
          </p>
          <p className="d-flex">
            <img src={location} alt="location" className="card-icon" />
            <span className="muted-text">{this.props.lokasi}</span>
          </p>
          <a href={this.props.link} target="_blank" className="lihat-lokasi mb-3">
            Lihat Lokasi di Google Maps
          </a>
        </div>
      </div>
    );
  }
}

export default CardDonorAdmin;
