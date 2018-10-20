import { SUBMIT_POST, LOAD_POSTS } from './actionConstants';
import fetch from 'cross-fetch';
import { push } from 'connected-react-router'

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    posts
  }
}
export const submitPost = (post) => {
  return {
    type: SUBMIT_POST,
    post
  }
}
export const fetchPosts = () => {
  debugger;
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(responce => responce.json())
      .then(posts => dispatch(loadPosts(posts)))
      .catch(err => { throw (err) })
  }
}
export function createPost(post) {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(post => {
        dispatch(submitPost(post));
        dispatch(push('/'));
      })
      .catch(err => { throw (err) })
  }
}
