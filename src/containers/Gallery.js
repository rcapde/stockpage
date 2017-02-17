import React, { Component } from 'react';
import '../css/Gallery.css';
import Photo from '../components/photo';
import { connect } from 'react-redux';

class Gallery extends Component {
  componentWillMount() {
    window.scrollTo(0,0);
  }
  render() {
    console.log(this.props.imatges)
    return (
      <div className="gallery">
        <div className="gallerytitle">{this.props.params.categorie}</div>
        <div className="photo_section">
          <Photo src={'./photos/andorra_ski.jpg'} width={'360'} />
          <Photo src={'./photos/wax.jpg'} width={'330'} />
          <Photo src={'./photos/performstreet.jpg'} width={'260'} />
          <Photo src={'./photos/minecraft_carnival.jpg'} width={'380'} />
          <Photo src={'./photos/italia_travel.jpg'} width={'310'} />
          <Photo src={'./photos/festival_lion.jpg'} width={'260'} />
          <Photo src={'./photos/barcelona_night.jpg'} width={'330'} />
          <Photo src={'./photos/quote.jpg'} width={'290'} />
          <Photo src={'./photos/bubble.jpg'} width={'330'} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    imatges: state.imatges.data,

  };
}
export default connect(mapStateToProps,null)(Gallery);
