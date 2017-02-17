import React, { Component } from 'react';
import '../css/Instagram.css';
import Categories from '../components/categories';
import Photo from '../components/photo';
class Instagram extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
}
  render() {
    return (
      <div className="instacontent">
        <div className="instaheader">
          <div className="instatitle">FreeStockPhotos</div>
          <div className="instasubtitle">Beautifull free stock pictures</div>
          <div className="instasearchbar"><Categories /></div>
        </div>
        <div className="gallerysection">
          <div className="gallerytitle">onee</div>
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
      </div>
    );
  }
}

export default Instagram;
