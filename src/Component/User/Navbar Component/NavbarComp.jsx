import React, { Component } from 'react';
import NavbarFunct from './NavbarFunct';
import axios from 'axios';

const id_user = localStorage.getItem('id_user');

export default class Navbar extends Component {
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
