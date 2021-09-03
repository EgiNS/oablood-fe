import React, { Component } from 'react';
import poin from './Assets/poin.svg';
import laptop from './Assets/laptop.jpg';
import ModalHadiah from './modalHadiah';
import './Assets/style.css';
import Link from 'react-router-dom';

export default function card(props) {
  return (
    <div>
      <div className="reward col">
        <div className="card">
          <img src={`http://168.63.252.69:5000/uploads/${props.image}`} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <ModalHadiah id={props.id} point={props.point} name={props.name} image={props.image} point_user={props.point_user}/>
          </div>
        </div>
      </div>
    </div>
  )
}


// class CardReward extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="reward col">
//         <div className="card">
//           <img src={laptop} className="card-img-top" alt="" />
//           <div className="card-body">
//             <h5 className="card-title">Contoh Hadiah</h5>
//             <ModalHadiah />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default CardReward;
