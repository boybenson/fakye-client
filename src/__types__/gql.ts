/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation SignUp($content: SignUpContent) {\n    signUp(content: $content)\n  }\n": typeof types.SignUpDocument,
    "\n  mutation SignIn($content: SignInContent) {\n    signIn(content: $content) {\n      user {\n        id\n        fullName\n        phone\n      }\n      accessToken\n    }\n  }\n": typeof types.SignInDocument,
    "\n  mutation VerifyOtp($content: VerifyOtpContent) {\n    verifyOtp(content: $content)\n  }\n": typeof types.VerifyOtpDocument,
    "\n  mutation ToggleBookMark($content: ToggleBookMarkContent) {\n    toggleBookMark(content: $content)\n  }\n": typeof types.ToggleBookMarkDocument,
    "\n  mutation SearchPosts($filter: SearchPostsFilter) {\n    searchPosts(filter: $filter) {\n      id\n      name\n      description\n      userId\n      user {\n        id\n        phone\n        fullName\n      }\n      media\n      createdAt\n      updatedAt\n      postType\n    }\n  }\n": typeof types.SearchPostsDocument,
    "\n  mutation CreatePost($content: CreatePostContent) {\n    createPost(content: $content)\n  }\n": typeof types.CreatePostDocument,
    "\n  mutation CreateComment($content: CreateCommentContent) {\n    createComment(content: $content)\n  }\n": typeof types.CreateCommentDocument,
    "\n  query GetPosts($filter: GetPostsFilter) {\n    getPosts(filter: $filter) {\n      id\n      name\n      description\n      media\n      user {\n        id\n        phone\n        fullName\n      }\n      userId\n      createdAt\n      updatedAt\n      postType\n      commentCount\n    }\n  }\n": typeof types.GetPostsDocument,
    "\n  query Query($filter: IsPostBookmarkedFilter) {\n    isPostBookmarked(filter: $filter)\n  }\n": typeof types.QueryDocument,
    "\n  query GetBookmarks($filter: GetBookmarksFilter) {\n    getBookmarks(filter: $filter) {\n      id\n      user {\n        id\n        phone\n        fullName\n      }\n      post {\n        id\n        name\n        description\n        userId\n        media\n        createdAt\n        updatedAt\n        postType\n      }\n    }\n  }\n": typeof types.GetBookmarksDocument,
    "\n  query GetComments($filter: GetCommentsFilter) {\n    getComments(filter: $filter) {\n      id\n      message\n      userId\n      user {\n        id\n        phone\n        fullName\n      }\n      postId\n      post {\n        id\n        name\n        description\n        userId\n        media\n        postType\n        createdAt\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.GetCommentsDocument,
};
const documents: Documents = {
    "\n  mutation SignUp($content: SignUpContent) {\n    signUp(content: $content)\n  }\n": types.SignUpDocument,
    "\n  mutation SignIn($content: SignInContent) {\n    signIn(content: $content) {\n      user {\n        id\n        fullName\n        phone\n      }\n      accessToken\n    }\n  }\n": types.SignInDocument,
    "\n  mutation VerifyOtp($content: VerifyOtpContent) {\n    verifyOtp(content: $content)\n  }\n": types.VerifyOtpDocument,
    "\n  mutation ToggleBookMark($content: ToggleBookMarkContent) {\n    toggleBookMark(content: $content)\n  }\n": types.ToggleBookMarkDocument,
    "\n  mutation SearchPosts($filter: SearchPostsFilter) {\n    searchPosts(filter: $filter) {\n      id\n      name\n      description\n      userId\n      user {\n        id\n        phone\n        fullName\n      }\n      media\n      createdAt\n      updatedAt\n      postType\n    }\n  }\n": types.SearchPostsDocument,
    "\n  mutation CreatePost($content: CreatePostContent) {\n    createPost(content: $content)\n  }\n": types.CreatePostDocument,
    "\n  mutation CreateComment($content: CreateCommentContent) {\n    createComment(content: $content)\n  }\n": types.CreateCommentDocument,
    "\n  query GetPosts($filter: GetPostsFilter) {\n    getPosts(filter: $filter) {\n      id\n      name\n      description\n      media\n      user {\n        id\n        phone\n        fullName\n      }\n      userId\n      createdAt\n      updatedAt\n      postType\n      commentCount\n    }\n  }\n": types.GetPostsDocument,
    "\n  query Query($filter: IsPostBookmarkedFilter) {\n    isPostBookmarked(filter: $filter)\n  }\n": types.QueryDocument,
    "\n  query GetBookmarks($filter: GetBookmarksFilter) {\n    getBookmarks(filter: $filter) {\n      id\n      user {\n        id\n        phone\n        fullName\n      }\n      post {\n        id\n        name\n        description\n        userId\n        media\n        createdAt\n        updatedAt\n        postType\n      }\n    }\n  }\n": types.GetBookmarksDocument,
    "\n  query GetComments($filter: GetCommentsFilter) {\n    getComments(filter: $filter) {\n      id\n      message\n      userId\n      user {\n        id\n        phone\n        fullName\n      }\n      postId\n      post {\n        id\n        name\n        description\n        userId\n        media\n        postType\n        createdAt\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetCommentsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignUp($content: SignUpContent) {\n    signUp(content: $content)\n  }\n"): (typeof documents)["\n  mutation SignUp($content: SignUpContent) {\n    signUp(content: $content)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignIn($content: SignInContent) {\n    signIn(content: $content) {\n      user {\n        id\n        fullName\n        phone\n      }\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($content: SignInContent) {\n    signIn(content: $content) {\n      user {\n        id\n        fullName\n        phone\n      }\n      accessToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VerifyOtp($content: VerifyOtpContent) {\n    verifyOtp(content: $content)\n  }\n"): (typeof documents)["\n  mutation VerifyOtp($content: VerifyOtpContent) {\n    verifyOtp(content: $content)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ToggleBookMark($content: ToggleBookMarkContent) {\n    toggleBookMark(content: $content)\n  }\n"): (typeof documents)["\n  mutation ToggleBookMark($content: ToggleBookMarkContent) {\n    toggleBookMark(content: $content)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SearchPosts($filter: SearchPostsFilter) {\n    searchPosts(filter: $filter) {\n      id\n      name\n      description\n      userId\n      user {\n        id\n        phone\n        fullName\n      }\n      media\n      createdAt\n      updatedAt\n      postType\n    }\n  }\n"): (typeof documents)["\n  mutation SearchPosts($filter: SearchPostsFilter) {\n    searchPosts(filter: $filter) {\n      id\n      name\n      description\n      userId\n      user {\n        id\n        phone\n        fullName\n      }\n      media\n      createdAt\n      updatedAt\n      postType\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreatePost($content: CreatePostContent) {\n    createPost(content: $content)\n  }\n"): (typeof documents)["\n  mutation CreatePost($content: CreatePostContent) {\n    createPost(content: $content)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateComment($content: CreateCommentContent) {\n    createComment(content: $content)\n  }\n"): (typeof documents)["\n  mutation CreateComment($content: CreateCommentContent) {\n    createComment(content: $content)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPosts($filter: GetPostsFilter) {\n    getPosts(filter: $filter) {\n      id\n      name\n      description\n      media\n      user {\n        id\n        phone\n        fullName\n      }\n      userId\n      createdAt\n      updatedAt\n      postType\n      commentCount\n    }\n  }\n"): (typeof documents)["\n  query GetPosts($filter: GetPostsFilter) {\n    getPosts(filter: $filter) {\n      id\n      name\n      description\n      media\n      user {\n        id\n        phone\n        fullName\n      }\n      userId\n      createdAt\n      updatedAt\n      postType\n      commentCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Query($filter: IsPostBookmarkedFilter) {\n    isPostBookmarked(filter: $filter)\n  }\n"): (typeof documents)["\n  query Query($filter: IsPostBookmarkedFilter) {\n    isPostBookmarked(filter: $filter)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBookmarks($filter: GetBookmarksFilter) {\n    getBookmarks(filter: $filter) {\n      id\n      user {\n        id\n        phone\n        fullName\n      }\n      post {\n        id\n        name\n        description\n        userId\n        media\n        createdAt\n        updatedAt\n        postType\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBookmarks($filter: GetBookmarksFilter) {\n    getBookmarks(filter: $filter) {\n      id\n      user {\n        id\n        phone\n        fullName\n      }\n      post {\n        id\n        name\n        description\n        userId\n        media\n        createdAt\n        updatedAt\n        postType\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetComments($filter: GetCommentsFilter) {\n    getComments(filter: $filter) {\n      id\n      message\n      userId\n      user {\n        id\n        phone\n        fullName\n      }\n      postId\n      post {\n        id\n        name\n        description\n        userId\n        media\n        postType\n        createdAt\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetComments($filter: GetCommentsFilter) {\n    getComments(filter: $filter) {\n      id\n      message\n      userId\n      user {\n        id\n        phone\n        fullName\n      }\n      postId\n      post {\n        id\n        name\n        description\n        userId\n        media\n        postType\n        createdAt\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;