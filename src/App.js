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
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <BuatArtikel />
    </Router>
  );
}

export default App;
