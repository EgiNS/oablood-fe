import React, { Component } from 'react';
import location from './Assets/location.svg';
import clock from './Assets/clock.svg';
import publish from './Assets/publish.svg';
import eventdonor from './Assets/eventdonor.png';
import './Assets/style.css';
import axios from 'axios';

export default class CardDonor extends Component {

  state = {
    data : {
      id_event: this.props.id,
      id_pmi: this.props.id_pmi
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('user/donor-darah-pmi', this.state.data).then(
      res => {
        console.log(res);
        alert("Reservasi Berhasil");
      }
    ).catch(
      err => {
        console.log(err.response.data.message);
        alert("Reservasi Gagal");
      }
    )
  };

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
      <div>
        <div className="card card-container">
          <img src={`http://168.63.252.69:5000/uploads/${this.props.image}`} alt="eventdonor" className="card-img-top mb-4" />
          <p className="lokasi-rs mb-4">{this.state.name}</p>
          <p className="d-flex">
            <img src={publish} alt="publish" className="card-icon" />
            <span className="muted-text me-3">{this.props.jadwal}</span>
            <img src={clock} alt="clock" className="card-icon" />
            <span className="muted-text">{this.props.waktu}</span>
          </p>
          <p className="d-flex">
            <img src={location} alt="location" className="card-icon" />
            <span className="muted-text">{this.props.lokasi}</span>
          </p>
          <a href={this.props.link} target="_blank" className="lihat-lokasi mb-3">
            Lihat Lokasi di Google Maps
          </a>
          <div className="d-grid w-100 mx-auto">
            <button class="btn card-button" id="button-daftar" type="button" onClick={this.handleSubmit}>
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    )
  }
}



// export default function CardDonor(props) {

//   const data = {
//     id_event: props.id,
//     id_pmi : props.nama
//   }

//   const handleSubmit = e => {
//     e.preventDefault();

//     axios.post('user/donor-darah-pmi', data).then(
//         res => {
//             console.log(res);
//             alert("Reservasi Berhasil");
//         }
//     ).catch(
//         err => {
//             console.log(err.response.data.message);
//             alert("Reservasi Gagal");
//         }
//     )
//   };

//   return (
//     <div className="col">
//     <div className="card card-container">
//       <img src={eventdonor} alt="eventdonor" className="card-img-top mb-4" />
//       <p className="lokasi-rs mb-4">{props.id_pmi}</p>
//       <p className="d-flex">
//         <img src={publish} alt="publish" className="card-icon" />
//         <span className="muted-text me-3">{props.jadwal}</span>
//         <img src={clock} alt="clock" className="card-icon" />
//         <span className="muted-text">{props.waktu}</span>
//       </p>
//       <p className="d-flex">
//         <img src={location} alt="location" className="card-icon" />
//         <span className="muted-text">{props.lokasi}</span>
//       </p>
//       <a href={props.link} target="_blank" className="lihat-lokasi mb-3">
//         Lihat Lokasi di Google Maps
//       </a>
//       <div className="d-grid w-100 mx-auto">
//           <button class="btn card-button" id="button-daftar" type="button" onClick={handleSubmit}>
//             Daftar Sekarang
//           </button>
//       </div>
//     </div>
//   </div>
//   )
// }