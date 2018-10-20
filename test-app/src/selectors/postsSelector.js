import { createSelector } from 'reselect'

const getPosts = (state) => state.posts;

export const getFilteredPostsSelector = createSelector([getPosts],
  posts => {
    return posts.filter(post => post.userId === 1)
  }
)