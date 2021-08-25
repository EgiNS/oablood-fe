import React, { Component } from 'react'
import NavbarComp from '../Navbar Component/NavbarComp'
import './Assets/Dashboard Style.css'

export default class DashboardComp extends Component {

    render() {
        if (this.props.user) {
            return (
                <div className="dashb-container">
                    <div className="navbarComp">
                        <NavbarComp></NavbarComp>
                    </div>
                    <div className="dash-content">
                        <h3>Halo! {this.props.user.name}</h3>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="dashb-container">
                    <div className="navbarComp">
                        <NavbarComp></NavbarComp>
                    </div>
                    <div className="dash-content">
                        <h3>Halo! Kamu Belum Login</h3>
                    </div>
                </div>
            )
        }
    }
}
