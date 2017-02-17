import React, { Component } from 'react';
import '../css/App.css';
import Instagram from './Instagram';
import Layout from './Layout';
import Gallery from './Gallery';
import Postpage from '../components/post_page';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as actions from '../actions/index'
import { connect } from 'react-redux';

class App extends Component {
  componentWillMount(){
    this.props.fetchCat();
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Instagram}/>
          <Route path="instagram" component={Instagram}/>
          <Route onUpdate={() => window.scrollTo(0, 0)} path="/galleries/:categorie" component={Gallery} />
        </Route>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
