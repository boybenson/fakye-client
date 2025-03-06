import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts($filter: GetPostsFilter) {
    getPosts(filter: $filter) {
      id
      name
      description
      media
      user {
        id
        phone
        fullName
      }
      userId
      createdAt
      updatedAt
      postType
    }
  }
`;

export const GET_IS_POST_BOOKMARKED = gql`
  query Query($filter: IsPostBookmarkedFilter) {
    isPostBookmarked(filter: $filter)
  }
`;
