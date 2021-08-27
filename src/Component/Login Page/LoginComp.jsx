import React, { Component } from 'react';
import './assets/style.css';
import Logo from './assets/Logo.svg';
import { Input, Button, Form } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class LoginComp extends Component {

    state = {

    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('user/login', data)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('id_user', res.data.id_user);
                this.setState({
                    login: true
                });
                this.props.setUser(res.data.user)
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        if(this.state.login) {
            return <Redirect to={'/beranda'} />;
        }

        return (
            <div className="kontainer">
                <div className="bg-left">
                    <div className="logo">
                        <div id="logo-img"><img src={Logo} alt="" /></div>
                        <p>OABlood</p>
                    </div>
                    <div className="bg"></div>
                </div>
                <div className="form-right" onSubmit={this.handleSubmit}>
                    <p id="masuk"> Masuk </p>
                    <p id="welcome"> Selamat datang di OABlood </p>
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