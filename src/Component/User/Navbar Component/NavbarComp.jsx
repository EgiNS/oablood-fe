import React, { Component } from 'react';
import NavbarFunct from './NavbarFunct';
import axios from 'axios';
import { useState } from 'react';
import logo from './Assets/Logo.svg';
import ayoDonor from './Assets/Donor.svg';
import poin from './Assets/Poin.svg';
import beranda from './Assets/Beranda.svg';
import reqDarah from './Assets/Request.svg';
import reservasi from './Assets/Reservasi.svg';
import reward from './Assets/Reward.svg';
import user from './Assets/User.svg';
import ads from './Assets/Ads.svg';
import logout from './Assets/Logout.svg';
import './Assets/Style.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Collapse, NavbarToggler, Nav, Navbar } from 'reactstrap';
import Donor from '../Donor/Donor';

const id_user = localStorage.getItem('id_user');

export default class NavbarComp extends Component {
    state = {};

    componentDidMount(){
        axios.get(`user/profile/${id_user}`).then(
            res => {
                // console.log("res", res);
                this.setState({
                    user: res.data.profile
                })
                // console.log(this.state.user);
            },
            err => {
                console.log(err);
            }
        )
    };
    
    render() {
        return (
            <div>
                {/* {console.log("NavbarComp", this.state.user)} */}
                <NavbarFunct user={this.state.user} />
            </div>
        )
    }
}
