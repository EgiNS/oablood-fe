import React, { Component } from "react";
import LoginComp from "./Component/Login Page/LoginComp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardComp from "./Component/Dashboard Component/DashboardComp";
import SignUpComp from "./Component/Login Page/SignUpComp";
import Reservasi from "./Component/User/Reservasi/Reservasi";
import NavbarComp from "./Component/User/Navbar Component/NavbarComp";
import Reward from "./Component/User/Reward/Reward";
import Profile from "./Component/User/Edit Profile/Profile";
import EditProfile from "./Component/User/Edit Profile/EditProfile";
import Request from "./Component/User/Request/Request";
import Donor from "./Component/User/Donor/Donor";
import Beranda from "./Component/User/Beranda/Beranda";
import ArtikelKesehatan from "./Component/User/Beranda/ArtikelKesehatan";
import SyaratdanKetentuan from "./Component/User/Syarat dan Ketentuan/SyaratdanKetentuan";
import BerandaAdmin from "./Component/Admin/Beranda Admin/BerandaAdmin";
import BuatAkun from "./Component/Admin/Buat Akun/BuatAkun";
import BuatArtikel from "./Component/Admin/Buat Artikel/BuatArtikel";
import DonorAdmin from "./Component/Admin/Donor Admin/DonorAdmin";
import RequestAdmin from "./Component/Admin/Request Admin/RequestAdmin";
import RewardAdmin from "./Component/Admin/Reward Admin/RewardAdmin";
import BuatReward from "./Component/Admin/Buat Reward/BuatReward";
import BerandaPMI from "./Component/PMI/BerandaPMI/BerandaPMI";
import ArtikelPMI from "./Component/PMI/BerandaPMI/ArtikelPMI";
import DonorPMI from "./Component/PMI/DonorPMI/DonorPMI";
import BuatEvent from "./Component/PMI/BuatEventPMI/BuatEvent";
import JadwalPMI from "./Component/PMI/JadwalPMI/JadwalPMI";
import ProfileInstansi from "./Component/PMI/ProfileInstansi/ProfileInstansi";
import BerandaRS from "./Component/Rumah Sakit/BerandaRS/BerandaRS";
import ArtikelRS from "./Component/Rumah Sakit/BerandaRS/ArtikelRS";
import RequestRS from "./Component/Rumah Sakit/RequestRS/RequestRS";
import BuatRequest from "./Component/Rumah Sakit/BuatRequestRS/BuatRequest";
import JadwalRS from "./Component/Rumah Sakit/JadwalRS/JadwalRS";
import UpgradePro from "./Component/User/Upgrade Pro/UpgradePro";
import Test from "./Component/Admin/Test/test";
import axios from "axios";
import ArtikelComp from "./Component/User/Beranda/ArtikelComp";
import JadwalDonor from "./Component/User/Jadwal Donor/JadwalDonor";
import LandingPage from "./Component/User/Landing Page/LandingPage";

const id_user = localStorage.getItem("id_user");
const pengguna = localStorage.getItem("pengguna");

export default class App extends Component {
  state = {};

  componentDidMount = () => {
    if (pengguna === "user") {
      axios.get(`user/profile/${id_user}`).then(
        (res) => {
          this.setState({
            user: res.data.profile,
          });
          localStorage.setItem("name", res.data.profile.name);
          localStorage.setItem("point", res.data.profile.point);
          console.log(this.state.user);
        },
        (err) => {
          console.log(err);
        }
      );
    } else if (pengguna === "rumah-sakit") {
      axios.get(`rumah-sakit/profile-rs/${id_user}`).then(
        (res) => {
          this.setState({
            user: res.data.profile,
          });
          console.log(this.state.user);
        },
        (err) => {
          console.log(err);
        }
      );
    } else if (pengguna === "pmi") {
      axios.get(`pmi/profile-pmi/${id_user}`).then(
        (res) => {
          this.setState({
            user: res.data.profile,
          });
          console.log(this.state.user);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={() => <LoginComp setUser={this.setUser} />} />
          <Route exact path="/beranda" component={() => <Beranda user={this.state.user} sapa="Halo" />} />
          <Route exact path="/signup" component={SignUpComp} />
          <Route exact path="/syarat-ketentuan" component={SyaratdanKetentuan} />
          <Route exact path="/artikel" component={ArtikelComp} />
          <Route exact path="/donor" component={Donor} />
          <Route exact path="/request" component={Request} />
          <Route exact path="/reservasi" component={Reservasi} />
          <Route exact path="/jadwaldonor" component={JadwalDonor} />
          <Route exact path="/reward" component={() => <Reward user={this.state.user} />} />
          <Route exact path="/profile" component={() => <Profile user={this.state.user} />} />
          <Route exact path="/profile/edit" component={() => <EditProfile user={this.state.user} />} />
          <Route exact path="/upgrade" component={UpgradePro} />
          <Route exact path="/rs-beranda" component={() => <BerandaRS user={this.state.user} />} />
          <Route exact path="/rs-request" component={RequestRS} />
          <Route exact path="/rs-jadwal" component={JadwalRS} />
          <Route exact path="/rs-buatrequest" component={BuatRequest} />
          <Route exact path="/pmi-beranda" component={() => <BerandaPMI user={this.state.user} />} />
          <Route exact path="/pmi-donor" component={DonorPMI} />
          <Route exact path="/pmi-jadwal" component={JadwalPMI} />
          <Route exact path="/pmi-buatevent" component={BuatEvent} />
          <Route exact path="/admin-beranda" component={() => <BerandaAdmin user={this.state.user} />} />
          <Route exact path="/admin-buatakun" component={BuatAkun} />
          <Route exact path="/admin-buatartikel" component={BuatArtikel} />
          <Route exact path="/admin-donor" component={DonorAdmin} />
          <Route exact path="/admin-request" component={RequestAdmin} />
          <Route exact path="/admin-reward" component={RewardAdmin} />
          <Route exact path="/admin-buatreward" component={BuatReward} />
        </Switch>
      </BrowserRouter>
    );
  }
}
