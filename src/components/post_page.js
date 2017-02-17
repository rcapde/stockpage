import React, { Component } from 'react';
import '../css/Gallery.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

class Postpage extends Component {
  componentDidMount() {
      window.scrollTo(0,0);
  }
  render() {

    const postcontent = this.props.post[this.props.params.postid];
    return (
      <div className="postpage">
        <div className="post">
          <div className="postpagetitle"><span>{this.props.params.postname}</span></div>
          <div className="postpagedate"><span>{this.props.date}</span></div>
          <div className="postpagecontent"><span>{postcontent.text}</span></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post.data,
  };
}


export default connect(mapStateToProps,actions)(Postpage);
