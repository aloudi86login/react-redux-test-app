import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getFilteredPostsSelector } from './selectors/postsSelector'
import * as actionCreators from '../src/actions/postActions';

import FormComponent from './components/form/FormComponent.js';
import PostsComponent from './components/posts/PostsComponent.js';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact render={() => (
              <PostsComponent posts={this.props.posts} />
            )} />
            <Route path='/submit_post' render={() => (
              <FormComponent handleSubmit={this.props.actions.createPost} />
            )} />
          </Switch>
        </div>
      </ ConnectedRouter>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    posts: getFilteredPostsSelector(state),
    history: ownProps.history
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
};
App.propTypes = {
  posts: PropTypes.array.isRequired,
  history: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
