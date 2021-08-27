import React, { Component } from 'react'
import axios from 'axios';
import ProfileFunc from './ProfileFunc'

const id_user = localStorage.getItem('id_user');

export default class Profile extends Component {
    state = {
        user: []
      }
    
    componentDidMount = () => {
    
        axios.get(`user/profile/${id_user}`).then(
            res => {
                this.setState({
                  user: res.data.profile
                })
                console.log(this.state.user)
            },
            err => {
                console.log(err);
            }
        )
    };
    
    render() {
        return (
            <div>
                <ProfileFunc nama={this.state.user}/>
            </div>
        )
    }
}
