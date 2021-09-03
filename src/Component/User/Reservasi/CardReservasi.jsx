import React, { Component } from 'react';
import blood from './Assets/blood.svg';
import pengantri from './Assets/pengantri.svg';
import rhesus from './Assets/rhesus.svg';
import rumahsakit1 from './Assets/rumahsakit1.png';
import LihatSyarat from './LihatSyarat';
import ModalReservasi from './ModalReservasi';
import './Assets/style.css';

export default function CardReservasi(props) {
  return (
    <div>
       <div className="col">
        <div className="card card-container">
          <img src={`http://168.63.252.69:5000/uploads/${props.image}`} alt="rumahsakit" className="card-img-top mb-4" />
          <p className="lokasi-rs mb-4">{props.nama}</p>
          <p className="d-flex">
            <img src={pengantri} alt="pengantri" className="card-icon" />
            <span className="muted-text me-4">(angka) pengantri</span>
            {/* <span className="muted-text">Lihat Syarat Donor</span> */}
            <span>
              <LihatSyarat className="modal-lg" syarat={props.syarat}/>
            </span>
          </p>
          <p className="d-flex">
            <img src={blood} alt="golongan darah" className="card-icon" />
            <span className="muted-text me-3">{props.goldar}</span>
            <img src={rhesus} alt="rhesus" className="card-icon" />
            <span className="muted-text">{props.rhesus}</span>
          </p>
          <ModalReservasi className="modal-lg" id_rs={props.nama} id_req={props.id_req}/>
        </div>
      </div>
    </div>
  )
}


// class cardReservasi extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="col">
//         <div className="card card-container">
//           <img src={rumahsakit1} alt="rumahsakit" className="card-img-top mb-4" />
//           <p className="lokasi-rs mb-4">TC Mega Grosir Surabaya - Hadasa Community</p>
//           <p className="d-flex">
//             <img src={pengantri} alt="pengantri" className="card-icon" />
//             <span className="muted-text me-4">(angka) pengantri</span>
//             {/* <span className="muted-text">Lihat Syarat Donor</span> */}
//             <span>
//               <LihatSyarat className="modal-lg" />
//             </span>
//           </p>
//           <p className="d-flex">
//             <img src={blood} alt="golongan darah" className="card-icon" />
//             <span className="muted-text me-3">Golongan Darah (AB)</span>
//             <img src={rhesus} alt="rhesus" className="card-icon" />
//             <span className="muted-text">Rhesus (+)</span>
//           </p>
//           <ModalReservasi className="modal-lg" />
//         </div>
//       </div>
//     );
//   }
// }

// export default cardReservasi;
