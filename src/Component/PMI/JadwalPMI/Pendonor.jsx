import React, { Component } from 'react';
import teteh from './Assets/teteh.png';
import './Assets/style.css';
import axios from 'axios';

class Pendonor extends Component {
  state = {
    post: []
  }

  getPendonor = () => {
    axios.get('/pmi/pendonor').then(
      res => {
        console.log(res);
        this.setState({
          post: res.data
        })
      },
      err => {
        console.log(err);
      }
    )
  }

  putPendonor = (id) => {
    axios.put(`pmi/selesai-pmi/${id}`).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  delPendonor = (id) => {
    axios.delete(`pmi/delete-event/${id}`).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  render() {
    return (
      <div className="pendonor d-flex justify-content-around align-items-center">
        <div className="nama-pendonor d-flex align-items-around">
          <div className="profile-picture">
            <img src={teteh} alt="" className="pic" />
          </div>
          <div className="nama">
            <p className="default-text" style={{ fontWeight: '600' }}>
              (Lesya Borodina)
            </p>
            <button type="button" className="text-button">
              Lihat Profil Lengkap
            </button>
          </div>
        </div>
        <div className="id-pendonor">
          <p className="default-text">(123123123)</p>
        </div>
        <div className="tanggal-kegiatan">
          <p className="default-text">(12 Agustus 2021)</p>
        </div>
        <div className="status-kegiatan d-flex">
          <div className="button-selesai">
            <button type="button" className="btn" value={this.state.id_user} onClick={e => this.putPendonor(e.target.value)}>
              Selesaikan
            </button>
          </div>
          <div className="button-batal">
            <button type="button" className="btn" value={this.state.id_user} onClick={e => this.delPendonor(e.target.value)}>
              Batalkan
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pendonor;
