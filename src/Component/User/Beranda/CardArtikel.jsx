import React, { Component } from 'react';
import './Assets/style.css';

export default function CardArtikel(props) {
  return (
    <div style={{ width: "20vw", display:"inline-block", marginLeft: "2vw" }}>
      <div class="col">
        <div class="card">
          <img src={`http://168.63.252.69:5000/uploads/${props.image}`} class="card-img-top" alt="cover" />
          <div class="card-body">
            <p className="muted-text">5 min read</p>
            <a href={props.link} style={{ textDecoration: "none" }} target="_blank"><h3 className="judul-artikel">{props.judul}</h3></a>
          </div>
        </div>
      </div>
    </div>
  )
}


// class CardArtikel extends Component {
//   state = {};
//   render() {
//     return (
//       <div class="col">
//         <div class="card">
//           <img src={artikelcover} class="card-img-top" alt="cover" />
//           <div class="card-body">
//             <p className="muted-text">5 min read</p>
//             <h3 className="judul-artikel">Kementerian ESDM Gelar Donor Darah dan Plasma Konvalesen</h3>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default CardArtikel;
