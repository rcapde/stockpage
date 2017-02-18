import React, { Component } from 'react';
import '../css/Categories.css';
import { Link } from 'react-router';
const links={
  textDecoration:'none',
  color:'white',
}

class LittleCategories extends Component {
  render() {
    return (
      <div className="lcategories">
        <span><Link style={links} to={"/galleries/nature"} activeClassName="active">Nature</Link></span>
        <span><Link style={links} to={"/galleries/people"} activeClassName="active">People</Link></span>
        <span><Link style={links} to={"/galleries/weather"} activeClassName="active">Weather</Link></span>
        <span><Link style={links} to={"/galleries/sports"} activeClassName="active">Sports</Link></span>
      </div>
    );
  }
}

export default LittleCategories;
