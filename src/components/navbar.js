import React, { Component } from 'react';
import '../css/Navbar.css';
import { Link,IndexLink } from 'react-router'
import LittleSearchbar from './littlesearchbar';
import LittleCategories from './littlecategories';


const items = ['Nature','People','Weather','Sports'];


class Navbar extends Component {

  render() {

    return (
      <div className="navbar">
        <div className="logo"><IndexLink className="link" to={'instagram'} activeClassName="active">Logo</IndexLink></div>
        <div className="menu">
          <LittleCategories />
        </div>
      </div>
    );
  }
}

export default Navbar;
