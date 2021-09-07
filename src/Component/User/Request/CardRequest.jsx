import React, { Component } from 'react';
import rumahsakit2 from './Assets/rumahsakit2.png';
import bloodBag from './Assets/bloodBag.svg';
import publish from './Assets/publish.svg';
import bloodgrey from './Assets/bloodgrey.svg';
import rhesusgrey from './Assets/rhesusgrey.svg';
import './Assets/style.css';
import axios from 'axios';

export default class CardRequest extends Component {

  state = {}

  componentDidMount() {
    axios.get(`rumah-sakit/profile-rs/${this.props.id_rs}`).then(
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
          <img src={`http://168.63.252.69:5000/uploads/${this.props.image}`} alt="rumahsakit" className="card-img-top mb-4" />
          <p className="lokasi-rs mb-4">{this.state.name}</p>
          <p className="d-flex">
            <img src={bloodBag} alt="bloodbag" className="card-icon" />
            <span className="muted-text me-4">{this.props.terpenuhi} dari {this.props.butuh} kantong terpenuhi</span>
            {/* <span className="muted-text">Lihat Syarat Donor</span> */}
          </p>
          <p className="d-flex">
            <img src={bloodgrey} alt="golongan darah" className="card-icon" />
            <span className="muted-text me-3">Golongan Darah {this.props.goldar}</span>
            <img src={rhesusgrey} alt="rhesus" className="card-icon" />
            <span className="muted-text">Rhesus {this.props.rhesus}</span>
          </p>
          <p className="d-flex">
            <img src={publish} alt="publish" className="card-icon" />
            <span className="muted-text">Dipublish pada {this.props.publish}</span>
          </p>
          <a href={this.props.link} target="_blank" className="lihat-lokasi mb-3">
            Lihat Lokasi di Google Maps
          </a>
        </div>
      </div>
    )
  }
}


// export default function CardRequest(props) {
//   return (
//     <div className="col">
//         <div className="card card-container">
//           <img src={`http://168.63.252.69:5000/uploads/${props.image}`} alt="rumahsakit" className="card-img-top mb-4" />
//           <p className="lokasi-rs mb-4">{props.nama}</p>
//           <p className="d-flex">
//             <img src={bloodBag} alt="bloodbag" className="card-icon" />
//             <span className="muted-text me-4">{props.terpenuhi} dari {props.butuh} kantong terpenuhi</span>
//             {/* <span className="muted-text">Lihat Syarat Donor</span> */}
//           </p>
//           <p className="d-flex">
//             <img src={bloodgrey} alt="golongan darah" className="card-icon" />
//             <span className="muted-text me-3">Golongan Darah {props.goldar}</span>
//             <img src={rhesusgrey} alt="rhesus" className="card-icon" />
//             <span className="muted-text">Rhesus {props.rhesus}</span>
//           </p>
//           <p className="d-flex">
//             <img src={publish} alt="publish" className="card-icon" />
//             <span className="muted-text">Dipublish pada {props.publish}</span>
//           </p>
//           <a href={props.link} target="_blank" className="lihat-lokasi mb-3">
//             Lihat Lokasi di Google Maps
//           </a>
//         </div>
//       </div>
//   )
// }