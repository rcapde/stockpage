import React, { Component } from 'react';
import '../css/Gallery.css';

class Photo extends Component {
  render() {
      const image_src = `${this.props.src}`;
    return (
      <div className="photo">
        <img src={image_src}
              height='260'
              width={this.props.width}
              role="presentation"
              />
      </div>
    );
  }
}

export default Photo;
