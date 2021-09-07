import React, { Component } from 'react';
import bloodgrey from './Assets/bloodgrey.svg';
import pengantri from './Assets/pengantri.svg';
import rhesusgrey from './Assets/rhesusgrey.svg';
import rumahsakit1 from './Assets/rumahsakit1.png';
import LihatSyarat from './LihatSyarat';
import ModalReservasi from './ModalReservasi';
import './Assets/style.css';
import axios from 'axios';

export default class CardReservasi extends Component {

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
            <img src={pengantri} alt="pengantri" className="card-icon" />
            <span className="muted-text me-4">(angka) pengantri</span>
            {/* <span className="muted-text">Lihat Syarat Donor</span> */}
            <span>
              <LihatSyarat className="modal-lg" syarat={this.props.syarat} />
            </span>
          </p>
          <p className="d-flex">
            <img src={rhesusgrey} alt="golongan darah" className="card-icon" />
            <span className="muted-text me-3">{this.props.goldar}</span>
            <img src={rhesusgrey} alt="rhesus" className="card-icon" />
            <span className="muted-text">{this.props.rhesus}</span>
          </p>
          <ModalReservasi className="modal-lg" id_rs={this.props.id_rs} id_req={this.props.id_req} />
        </div>
      </div>
    )
  }
}


// export default function CardReservasi(props) {
//   return (
//     <div>
//        <div className="col">
//         <div className="card card-container">
//           <img src={`http://168.63.252.69:5000/uploads/${props.image}`} alt="rumahsakit" className="card-img-top mb-4" />
//           <p className="lokasi-rs mb-4">{props.nama}</p>
//           <p className="d-flex">
//             <img src={pengantri} alt="pengantri" className="card-icon" />
//             <span className="muted-text me-4">(angka) pengantri</span>
//             {/* <span className="muted-text">Lihat Syarat Donor</span> */}
//             <span>
//               <LihatSyarat className="modal-lg" syarat={props.syarat}/>
//             </span>
//           </p>
//           <p className="d-flex">
//             <img src={rhesusgrey} alt="golongan darah" className="card-icon" />
//             <span className="muted-text me-3">{props.goldar}</span>
//             <img src={rhesusgrey} alt="rhesus" className="card-icon" />
//             <span className="muted-text">{props.rhesus}</span>
//           </p>
//           <ModalReservasi className="modal-lg" id_rs={props.nama} id_req={props.id_req}/>
//         </div>
//       </div>
//     </div>
//   )
// }