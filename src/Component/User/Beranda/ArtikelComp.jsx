import React, { Component } from 'react'
import axios from 'axios'
import CardArtikel from './CardArtikel';
import NavbarComp from '../Navbar Component/NavbarFunct';

export default class ArtikelComp extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get('/user/artikel').then(
            res => {
                console.log(res);
                this.setState({
                    post: res.data
                })
            },
            err => {
                console.log(err);
            }
        )
    };
    
    render() {
        return (
            <div style={{display:"flex", flexDirection:"row"}}>
                <div className="navbarComp">
                    <NavbarComp/>
                </div>
                <div className="artikelComp">
                {
                    this.state.post.map(post => {
                        return <CardArtikel judul={post.judul} link={post.link} image={post.image}/>
                    })
                }
                </div>
            </div>
        )
    }
}
