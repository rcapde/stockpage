import React, { Component } from 'react';
import '../css/Searchbar.css';

class Searchbar extends Component {
  render() {
    return (
      <div className="sb">
        <input className="sbinput" type="text" placeholder="Search photos..."/>
        <div className="submit"><i className="fa fa-search fa-2x"  aria-hidden="true" /></div>
      </div>
    );
  }
}

export default Searchbar;
