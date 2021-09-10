import React, { Component } from 'react';
import teteh from './Assets/teteh.png';
import './Assets/style.css';
import axios from 'axios';
import LihatProfile from './LihatProfile';

export default class Pendonor extends Component {

  state = {};

  componentDidMount() {
    axios.get(`user/profile/${this.props.id_user}`).then(
      res => {
        console.log(res);
        this.setState({
          name: res.data.profile.name,
          id: res.data.profile.id,
          email: res.data.profile.email,
          jenis_kelamin: res.data.profile.jenis_kelamin,
          golongan_darah: res.data.profile.golongan_darah,
          rhesus: res.data.profile.rhesus,
        })
      },
      err => {
        console.log(err);
      }
    )
    axios.get(`event/${this.props.id_event}`).then(
      res => {
        console.log(res);
        this.setState({
          jadwal: res.data.event.jadwal,
        })
      },
      err => {
        console.log(err);
      }
    )
  }

  putPendonor = () => {
    axios.put(`pmi/selesai-pmi/${this.props.id}`).then(
      res => {
        console.log(res);
        alert("User telah selesai melakukan donor");
      },
      err => {
        console.log(err);
      }
    )
  }

  deletePendonor = () => {
    axios.put(`pmi/batal/${this.props.id}`).then(
      res => {
        console.log(res);
        alert("Pendonor berhasil dibatalkan!");
      },
      err => {
        console.log(err);
      }
    )
  }


  render() {
    return (
      <div>
        <div className="pendonor d-flex justify-content-around align-items-center">
          <div className="nama-pendonor d-flex align-items-around">
            <div className="profile-picture">
              <img src={teteh} alt="" className="pic" />
            </div>
            <div className="nama">
              <p className="default-text" style={{ fontWeight: '600' }}>
                {this.state.name}
              </p>
              <button type="button" className="text-button">
                <span>
                  <LihatProfile className="modal-lg" name={this.state.name} email={this.state.email} jenis_kelamin={this.state.jenis_kelamin} golongan_darah={this.state.golongan_darah} rhesus={this.state.rhesus}/>
                </span>
              </button>
            </div>
          </div>
          <div className="id-pendonor">
            <p className="default-text">{this.props.id}</p>
          </div>
          <div className="tanggal-kegiatan">
            <p className="default-text">{this.state.jadwal}</p>
          </div>
          <div className="status-kegiatan d-flex">
            <div className="button-selesai">
              <button type="button" className="btn" onClick={this.putPendonor}>
                Selesaikan
              </button>
            </div>
            <div className="button-batal">
              <button type="button" className="btn" onClick={this.deletePendonor}>
                Batalkan
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// export default function Pendonor(props) {

//   let data = {
//     name : "budi"
//   }

//   axios.get(`user/profile/${props.id_user}`).then(
//     res => {
//       console.log(res);
//       data.name = res.data.profile.name
//     },
//     err => {
//       console.log(err);
//     }
//   )


  // const getProfilePendonor = () => {
  //   axios.get(`user/profile/${props.id_user}`).then(
  //     res => {
  //       console.log(res);
  //       data.name = res.data.profile.name
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

  // getProfilePendonor()



// class Pendonor extends Component {
//   state = {
//     post: []
//   }

//   getPendonor = () => {
//     axios.get('/pmi/pendonor').then(
//       res => {
//         console.log(res);
//         this.setState({
//           post: res.data
//         })
//       },
//       err => {
//         console.log(err);
//       }
//     )
//   }

  // putPendonor = (id) => {
  //   axios.put(`pmi/selesai-pmi/${id}`).then(
  //     res => {
  //       console.log(res);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

//   delPendonor = (id) => {
//     axios.delete(`pmi/delete-event/${id}`).then(
//       res => {
//         console.log(res);
//       },
//       err => {
//         console.log(err);
//       }
//     )
//   }

//   componentDidMount() {
//     this.getPendonor();
//   }


//   render() {
//     return (
//       <div className="pendonor d-flex justify-content-around align-items-center">
//         <div className="nama-pendonor d-flex align-items-around">
//           <div className="profile-picture">
//             <img src={teteh} alt="" className="pic" />
//           </div>
//           <div className="nama">
//             <p className="default-text" style={{ fontWeight: '600' }}>
//               (Lesya Borodina)
//             </p>
//             <button type="button" className="text-button">
//               Lihat Profil Lengkap
//             </button>
//           </div>
//         </div>
//         <div className="id-pendonor">
//           <p className="default-text">(123123123)</p>
//         </div>
//         <div className="tanggal-kegiatan">
//           <p className="default-text">(12 Agustus 2021)</p>
//         </div>
//         <div className="status-kegiatan d-flex">
//           <div className="button-selesai">
//             <button type="button" className="btn">
//               Selesaikan
//             </button>
//           </div>
//           <div className="button-batal">
//             <button type="button" className="btn">
//               Batalkan
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Pendonor;
