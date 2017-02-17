import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_content">
          <div className="links">
            <div><span> Licence </span> </div>
            <div> <span>Ricard Capdevila 2017º </span></div>
            <div> <a href="http://rcapde.cat/">www.rcapde.cat</a> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
