import React, { Component } from 'react';
import '../css/Gallery.css';
import Photo from '../components/photo';
import { connect } from 'react-redux';

class Gallery extends Component {
  componentWillMount() {
    window.scrollTo(0,0);
  }
  render() {
    const cat = this.props.params.categorie;
    const response = this.props.imatges.categories
    let query = '';

    if(cat === 'nature'){
      query = response.nature;
    }
    if(cat === 'people'){
      query = response.people;
    }
    if(cat === 'weather'){
      query = response.weather;
    }
    if(cat === 'sports'){
      query = response.sports;
    }

    console.log(query);

    const Photos = query.imatges.map((item)=> {
    return(
            <Photo key={item} src={`/photos/${cat}/${item}`} categorie={cat} id={item} />
          );
      })

    return (
      <div className="gallery">
        <div className="gallerytitle">{query.title}</div>
        <div className="photos">
          {Photos}
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
