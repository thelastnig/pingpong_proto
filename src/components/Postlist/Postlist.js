import React, { Component } from 'react';
import Postitem from '../Postitem';

class Postlist extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  render() {
    const { posts } = this.props;
    const postListArray = posts.map(
      post => (
        <Postitem post={post}/>
      )
    );
    return (
      <div>
        {postListArray}
      </div>
    );
  }
}

export default Postlist;