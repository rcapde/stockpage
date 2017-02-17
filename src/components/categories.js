import React, { Component } from 'react';
import '../css/Categories.css';
import { Link, IndexLink } from 'react-router';

class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <div className="catmenu">
          <span><Link style={links} to={"/galleries/nature"}>Nature</Link></span>
          <span><Link style={links} to={"/galleries/people"}>People</Link></span>
          <span><Link style={links} to={"/galleries/weather"}>Weather</Link></span>
          <span><Link style={links} to={"/galleries/sports"}>Sports</Link></span>
        </div>
      </div>
    );
  }
}
const links={
  textDecoration:'none',
  color:'white',
}
export default Categories;