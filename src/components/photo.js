import React, { Component } from 'react';
import '../css/Gallery.css';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class Photo extends Component {
  handleClick(photoid){
    this.props.fetchPhoto(photoid)
  }
  render() {
      const image_src = this.props.src;
    return (
      <div className="photo">
        <Link onClick={this.handleClick.bind(this)} to={`/photopage/${this.props.categorie}/${this.props.id}`}>
        <img src={image_src}
              height='260'
              width='360'
              alt='./one-punch-man.jpg'
              />
        </Link>
      </div>
    );
  }
}

export default connect(null,actions)(Photo);
