import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './PostsComponent.css';

const PostsComponent = (props) => {
  const {posts} = props;
  console.log(posts);
  return (
    <ListGroup>
      {
        (posts !== []) ? (posts.map(post => {          
          return (

            <ListGroupItem key={post.id} header={post.title}>
              {post.body}
            </ListGroupItem>)

          })) : (<p>...Loading</p>)
      }
    </ListGroup>
  );
}

export default PostsComponent;