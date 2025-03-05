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
