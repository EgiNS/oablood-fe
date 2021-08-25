import React, { Component } from 'react';
import './assets/style.css';
import Logo from './assets/Logo.svg';
import { Input, Button, FormGroup, Label, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SignUpComp extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            name: this.name,
            email: this.email,
            password: this.password
        }
        
        axios.post('user/register', data).then(
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
        return (
            <div>
                <div className="kontainer">
                    <div className="bg-left">
                        <div className="logo">
                            <div id="logo-img"><img src={Logo} alt="" /></div>
                            <p>OABlood</p>
                        </div>
                        <div className="bg"></div>
                    </div>
                    <div className="form-right" onSubmit={this.handleSubmit}>
                        <p id="masuk"> Daftar </p>
                        <p id="welcome"> Selamat datang di OABlood </p>
                        <Form>
                            <Input type="email" name="email" id="email" placeholder="Email" onChange={e => this.email = e.target.value} />
                            <Input type="text" name="nama" id="nama" placeholder="Nama Lengkap" onChange={e => this.name = e.target.value} />
                            <Input type="password" name="password" id="password" placeholder="Password" onChange={e => this.password = e.target.value} />
                            <FormGroup check>
                                <Input type="checkbox" name="check" id="check" />
                                <Label for="exampleCheck" id="checklabel" check>Saya menyetujui Syarat & Ketentuan yang berlaku</Label>
                            </FormGroup>
                            <Button color="primary" size="lg" block>Daftar</Button>
                        </Form>
                        <p id="belum">Sudah Punya Akun? <Link to="/"> Masuk </Link> </p>
                    </div>
                </div>
            </div>
        )
    }
}
