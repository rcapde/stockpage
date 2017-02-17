import React, { Component } from 'react';
import '../css/App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        {this.props.children}

        <Footer />
      </div>
    );
  }
}

export default Layout;
