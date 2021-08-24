import logo from './logo.svg';
import './App.css';
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
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <BerandaPMI />
    </Router>
  );
}

export default App;
