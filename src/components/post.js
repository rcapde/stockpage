import React, { Component } from 'react';
import '../css/Post.css';
import { Link } from 'react-router';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Post extends Component {

  handleClick(){
    this.props.fetchPost()
  }
  render() {
    return (
      <div className="post">
        <div className="postcover"><Link onClick={this.handleClick.bind(this)} to={`/postpage/${this.props.postid}`}><img src="one-punch-man.jpg" width='300' height='220' /></Link></div>
        <div className="posttitle"><span>{this.props.title}</span></div>
      </div>
    );
  }
}


export default connect(null,actions)(Post);
