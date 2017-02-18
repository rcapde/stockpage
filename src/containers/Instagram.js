import React, { Component } from 'react';
import '../css/Instagram.css';
import Categories from '../components/categories';
import Photo from '../components/photo';
import { connect } from 'react-redux';

class Instagram extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
}
  render() {
    const response = this.props.imatges.categories.featured
    const Featured_Photos = response.imatges.map((item)=> {
    return(
            <Photo key={item} src={`/photos/featured/${item}`} categorie={'featured'} id={item} />
          );
      })
    return (
      <div className="instacontent">
        <div className="instaheader">
          <div className="instatitle">FreeCover Photostock</div>
          <div className="instasubtitle">Beautifull selection of free stock pictures</div>
          <div className="instasearchbar"><Categories /></div>
        </div>
        <div className="instagallery">
          <div className="instagallerytitle"> </div>
          <div className="instaphotos">
            {Featured_Photos}
          </div>
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
export default connect(mapStateToProps,null)(Instagram);
