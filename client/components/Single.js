import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    // Need index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId);
    //console.log(i);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    //console.log(post);
    // Need the post itself as well

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
});

export default Single;
