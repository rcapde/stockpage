import React, { Component } from 'react';
import '../css/Searchbar.css';

class LittleSearchbar extends Component {
  render() {
    return (
      <div className="lsb">
        <input className="lsbinput" type="text" placeholder="Search photos..."/>
        <div className="lsubmit"><i className="fa fa-search fa-lg" aria-hidden="true" /></div>
      </div>
    );
  }
}

export default LittleSearchbar;
