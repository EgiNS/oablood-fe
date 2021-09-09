import React, { Component } from 'react';
import './assets/style.css';
import Logo from './assets/Logo.svg';
import Doctor from './assets/Group 6.svg';
import { Input, Button, FormGroup, Label, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SignUpFunct from './SignUpFunct';

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
                alert("User berhasil didaftarkan!")
            }
        ).catch(
            err => {
                console.log(err);
                alert("Registrasi gagal! Pastikan email belum pernah digunakan dan password minimal 8 karakter")
            }
        )
    };

    render() {
        return (
            <div>
                <div className="kontainer">
                    <div className="bg-left">
                        <div className="logo"><img src={Logo} alt="" /></div>
                        <div className="bg"><img src={Doctor} alt=""/></div>
                    </div>
                    <div className="form-right" onSubmit={this.handleSubmit}>
                        <p id="masuk"> Daftar </p>
                        <p id="welcome"> Selamat datang di OABlood </p>
                        <Form>
                            <Input type="email" name="email" id="email" placeholder="Email" onChange={e => this.email = e.target.value} />
                            <Input type="text" name="nama" id="nama" placeholder="Nama Lengkap" onChange={e => this.name = e.target.value} />
                            <Input type="password" name="password" id="password" placeholder="Password" onChange={e => this.password = e.target.value} />
                            <SignUpFunct/>
                            {/* <FormGroup check>
                                <Input type="checkbox" name="check" id="check" />
                                <Link to='/syarat-ketentuan'>
                                    <Label for="exampleCheck" id="checklabel" check>Saya menyetujui Syarat & Ketentuan yang berlaku</Label>                               
                                </Link>
                            </FormGroup>
                            <Button color="primary" size="lg" block>Daftar</Button> */}
                        </Form>
                        <p id="belum">Sudah Punya Akun? <Link to="/login"> Masuk </Link> </p>
                    </div>
                </div>
            </div>
        )
    }
}
