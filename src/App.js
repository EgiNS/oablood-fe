import React, { Component } from 'react';
import LoginComp from './Component/Login Page/LoginComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardComp from './Component/Dashboard Component/DashboardComp';
import SignUpComp from './Component/Login Page/SignUpComp';
import Reservasi from './Component/User/Reservasi/Reservasi';
import NavbarComp from './Component/User/Navbar Component/NavbarComp';
import Reward from './Component/User/Reward/Reward';
import Profile from './Component/User/Edit Profile/Profile';
import EditProfile from './Component/User/Edit Profile/EditProfile';
import Request from './Component/User/Request/Request';
import Donor from './Component/User/Donor/Donor';
import Beranda from './Component/User/Beranda/Beranda';
import ArtikelKesehatan from './Component/User/Beranda/ArtikelKesehatan';
import SyaratdanKetentuan from './Component/User/Syarat dan Ketentuan/SyaratdanKetentuan';
import BerandaAdmin from './Component/Admin/Beranda Admin/BerandaAdmin';
import BuatAkun from './Component/Admin/Buat Akun/BuatAkun';
import BuatArtikel from './Component/Admin/Buat Artikel/BuatArtikel';
import DonorAdmin from './Component/Admin/Donor Admin/DonorAdmin';
import RequestAdmin from './Component/Admin/Request Admin/RequestAdmin';
import RewardAdmin from './Component/Admin/Reward Admin/RewardAdmin';
import BuatReward from './Component/Admin/Buat Reward/BuatReward';
import BerandaPMI from './Component/PMI/BerandaPMI/BerandaPMI';
import ArtikelPMI from './Component/PMI/BerandaPMI/ArtikelPMI';
import DonorPMI from './Component/PMI/DonorPMI/DonorPMI';
import BuatEvent from './Component/PMI/BuatEventPMI/BuatEvent';
import JadwalPMI from './Component/PMI/JadwalPMI/JadwalPMI';
import ProfileInstansi from './Component/PMI/ProfileInstansi/ProfileInstansi';
import BerandaRS from './Component/Rumah Sakit/BerandaRS/BerandaRS';
import ArtikelRS from './Component/Rumah Sakit/BerandaRS/ArtikelRS';
import RequestRS from './Component/Rumah Sakit/RequestRS/RequestRS';
import BuatRequest from './Component/Rumah Sakit/BuatRequestRS/BuatRequest';
import JadwalRS from './Component/Rumah Sakit/JadwalRS/JadwalRS';
import Test from './Component/Admin/Test/test';
import axios from 'axios';
import ArtikelComp from './Component/User/Beranda/ArtikelComp';

const id_user = localStorage.getItem('id_user');

export default class App extends Component {
  state = {};

  componentDidMount = () => {

      axios.get(`user/profile/${id_user}`).then(
          res => {
              this.setState({
                user: res.data.profile
              })
              // console.log(res);
              // this.setUser(res.data.profile);
              // console.log('state');
              // console.log('halo', this.state.user.name);
              console.log(this.state.user);
          },
          err => {
              console.log(err);
          }
      )
  };

  // setUser = user => {
  //   this.setState({
  //     user: user
  //   });
  // };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <LoginComp setUser={this.setUser}/>} />
          <Route exact path="/dashboard" component={() => <DashboardComp user={this.state.user}/> } />
          <Route exact path="/beranda" component={() => <Beranda user={this.state.user} sapa="Halo"/>} />
          <Route exact path="/signup" component={SignUpComp} />
          <Route exact path="/artikel" component={ArtikelComp} />
          <Route exact path="/donor" component={Donor} />
          <Route exact path="/request" component={Request} />
          <Route exact path="/reservasi" component={Reservasi} />
          <Route exact path="/reward" component={Reward} />
          <Route exact path="/profile" component={ () => <Profile user={this.state.user}/> } />
          <Route exact path="/profile/edit" component={EditProfile} />
        </Switch>
      </BrowserRouter>
    );
  }
}
