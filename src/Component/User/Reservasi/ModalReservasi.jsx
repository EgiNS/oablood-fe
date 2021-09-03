import React, { Component, useState } from 'react'
import axios from 'axios';
import ModalReservasiFunct from './ModalReservasiFunct';

export default class ModalReservasiState extends Component {

    state = {
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            name: this.name,
            email: this.email,
            password: this.password
        }

        axios.post('user/donor-darah-rs', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <ModalReservasiFunct id_rs={this.props.id_rs} id_req={this.props.id_req}/>
            </div>
        )
    }
}
