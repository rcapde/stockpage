import React, { Component } from 'react';
import '../css/Navbar.css';
import { IndexLink } from 'react-router'
import LittleCategories from './littlecategories';

class Navbar extends Component {

  render() {

    return (
      <div className="navbar">
        <div className="logo"><IndexLink className="link" to={'instagram'} activeClassName="active">FreeCover</IndexLink></div>
        <div className="menu">
          <LittleCategories />
        </div>
      </div>
    );
  }
}

export default Navbar;
