import React, { Component } from 'react';
import './assets/style.css';
import Logo from './assets/Logo.svg';
import Doctor from './assets/Group 6.svg';
import { Input, Button, Form, Label } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class LoginComp extends Component {

    state = {
        pengguna: "user"
    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }

        let error = false;

        console.log(this.state.pengguna);

        axios.post(`${this.state.pengguna}/login`, data).then(
            (res) => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('id_user', res.data.id_user);
                localStorage.setItem('pengguna', this.state.pengguna);
                this.setState({
                    login: true
                });
            },
            err => {
                console.log(err);
                alert(err.response.data.message);
            }
        )
    };

    render() {
        if (this.state.login) {
            if (this.state.pengguna === "user") {
                return <Redirect to={'/beranda'} />;
            } else if (this.state.pengguna === "rumah-sakit") {
                return <Redirect to={'/rs-beranda'} />;
            } else if (this.state.pengguna === "pmi") {
                return <Redirect to={'/pmi-beranda'} />;
            } else if (this.state.pengguna === "admin") {
                return <Redirect to={'/admin-beranda'} />;
            }
        }

        return (
            <div className="kontainer">
                <div className="bg-left">
                    <div className="logo"><img src={Logo} alt="" /></div>
                    <div className="bg"><img src={Doctor} alt=""/></div>
                </div>
                <div className="form-right" onSubmit={this.handleSubmit}>
                    <div className="form-pilih">
                        <div className="form-masuk">
                            <p id="masuk"> Masuk </p>
                            <p id="welcome"> Selamat datang di OABlood </p>
                        </div>
                        <div className="form-select-pengguna">
                            <Label>Sebagai:</Label>
                            <select className="form-select opsi-pengguna" aria-label="Default select example" onChange={e => this.setState({ pengguna: e.target.value })}>
                                <option value="user">Pendonor</option>
                                <option value="pmi">PMI</option>
                                <option value="rumah-sakit">Rumah Sakit</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <Form>
                        <Input type="email" name="email" id="email" placeholder="Email" onChange={e => this.email = e.target.value} />
                        <Input type="password" name="password" id="password" placeholder="Password" onChange={e => this.password = e.target.value} />
                        <Link to="/forgetpassword" id="forget"> Lupa Password </Link>
                        <Button color="primary" size="lg" block>Masuk</Button>
                    </Form>
                    <p id="belum">Belum Punya Akun? <Link to="/signup"> Daftar </Link> </p>
                </div>
            </div>
        )
    }
}