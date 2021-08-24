import React, { Component } from 'react';
import NavbarCompRS from '../../Rumah Sakit/NavbarCompRS/NavbarCompRS';
import './Assets/style.css';

class Test extends Component {
  state = {};
  render() {
    return (
      <div className="dashb-container">
        <div className="navbarComp">
          <NavbarCompRS />
        </div>
        <div className="dash-content">
          <h3>Halo!</h3>
        </div>
      </div>
    );
  }
}

export default Test;
