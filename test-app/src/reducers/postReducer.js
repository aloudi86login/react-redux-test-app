import { LOAD_POSTS, SUBMIT_POST } from '../actions/actionConstants';

const postReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return action.posts;
    }
    case SUBMIT_POST: {
      return [Object.assign({}, action.post), 
        ...state]
    }
    default: {
      return state;
    }
  }
}

export default postReducer;