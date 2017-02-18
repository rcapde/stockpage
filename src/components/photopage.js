import React, { Component } from 'react';
import '../css/PhotoPage.css';
import { connect } from 'react-redux';

class PhotoPage extends Component {
  componentDidMount() {
      window.scrollTo(0,0);
  }
  render() {


      const img_src=`/photos/${this.props.params.photocat}/${this.props.params.photoid}`;
    return (
      <div className="photopage">
          <div style={{backgroundImage: `url(${img_src})`, width:'100%', height:'100%', backgroundSize:'contain', backgroundRepeat:'no-repeat'}} >
          </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    photo: state.photo,
  };
}


export default connect(mapStateToProps,null)(PhotoPage);
