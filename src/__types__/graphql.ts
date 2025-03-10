/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type AuthUser = {
  __typename?: 'AuthUser';
  accessToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  id?: Maybe<Scalars['ID']['output']>;
  post?: Maybe<Post>;
  user?: Maybe<User>;
};

export type Comment = {
  __typename?: 'Comment';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
  postId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type CreateCommentContent = {
  message?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreatePostContent = {
  description?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetBookmarksFilter = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetCommentsFilter = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetPostsFilter = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  postType?: InputMaybe<PostType>;
};

export type IsPostBookmarkedFilter = {
  postId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Scalars['Boolean']['output']>;
  createPost?: Maybe<Scalars['Boolean']['output']>;
  searchPosts?: Maybe<Array<Maybe<Post>>>;
  signIn?: Maybe<AuthUser>;
  signUp?: Maybe<Scalars['Boolean']['output']>;
  toggleBookMark?: Maybe<Scalars['Boolean']['output']>;
  verifyOtp?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateCommentArgs = {
  content?: InputMaybe<CreateCommentContent>;
};


export type MutationCreatePostArgs = {
  content?: InputMaybe<CreatePostContent>;
};


export type MutationSearchPostsArgs = {
  filter?: InputMaybe<SearchPostsFilter>;
};


export type MutationSignInArgs = {
  content?: InputMaybe<SignInContent>;
};


export type MutationSignUpArgs = {
  content?: InputMaybe<SignUpContent>;
};


export type MutationToggleBookMarkArgs = {
  content?: InputMaybe<ToggleBookMarkContent>;
};


export type MutationVerifyOtpArgs = {
  content?: InputMaybe<VerifyOtpContent>;
};

export type Post = {
  __typename?: 'Post';
  commentCount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  media?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  postType?: Maybe<PostType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export enum PostType {
  Giveaway = 'giveaway',
  Request = 'request'
}

export type Query = {
  __typename?: 'Query';
  getBookmarks?: Maybe<Array<Maybe<Bookmark>>>;
  getComments?: Maybe<Array<Maybe<Comment>>>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  isPostBookmarked?: Maybe<Scalars['Boolean']['output']>;
};


export type QueryGetBookmarksArgs = {
  filter?: InputMaybe<GetBookmarksFilter>;
};


export type QueryGetCommentsArgs = {
  filter?: InputMaybe<GetCommentsFilter>;
};


export type QueryGetPostsArgs = {
  filter?: InputMaybe<GetPostsFilter>;
};


export type QueryIsPostBookmarkedArgs = {
  filter?: InputMaybe<IsPostBookmarkedFilter>;
};

export type SearchPostsFilter = {
  query?: InputMaybe<Scalars['String']['input']>;
};

export type SignInContent = {
  phone: Scalars['String']['input'];
};

export type SignUpContent = {
  fullName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type ToggleBookMarkContent = {
  postId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type VerifyOtpContent = {
  otpCode: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type SignUpMutationVariables = Exact<{
  content?: InputMaybe<SignUpContent>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: boolean | null };

export type SignInMutationVariables = Exact<{
  content?: InputMaybe<SignInContent>;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'AuthUser', accessToken?: string | null, user?: { __typename?: 'User', id?: string | null, fullName?: string | null, phone?: string | null } | null } | null };

export type VerifyOtpMutationVariables = Exact<{
  content?: InputMaybe<VerifyOtpContent>;
}>;


export type VerifyOtpMutation = { __typename?: 'Mutation', verifyOtp?: boolean | null };

export type ToggleBookMarkMutationVariables = Exact<{
  content?: InputMaybe<ToggleBookMarkContent>;
}>;


export type ToggleBookMarkMutation = { __typename?: 'Mutation', toggleBookMark?: boolean | null };

export type SearchPostsMutationVariables = Exact<{
  filter?: InputMaybe<SearchPostsFilter>;
}>;


export type SearchPostsMutation = { __typename?: 'Mutation', searchPosts?: Array<{ __typename?: 'Post', id?: string | null, name?: string | null, description?: string | null, userId?: string | null, media?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null, postType?: PostType | null, user?: { __typename?: 'User', id?: string | null, phone?: string | null, fullName?: string | null } | null } | null> | null };

export type CreatePostMutationVariables = Exact<{
  content?: InputMaybe<CreatePostContent>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: boolean | null };

export type CreateCommentMutationVariables = Exact<{
  content?: InputMaybe<CreateCommentContent>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: boolean | null };

export type GetPostsQueryVariables = Exact<{
  filter?: InputMaybe<GetPostsFilter>;
}>;


export type GetPostsQuery = { __typename?: 'Query', getPosts?: Array<{ __typename?: 'Post', id?: string | null, name?: string | null, description?: string | null, media?: Array<string | null> | null, userId?: string | null, createdAt?: any | null, updatedAt?: any | null, postType?: PostType | null, commentCount?: number | null, user?: { __typename?: 'User', id?: string | null, phone?: string | null, fullName?: string | null } | null } | null> | null };

export type QueryQueryVariables = Exact<{
  filter?: InputMaybe<IsPostBookmarkedFilter>;
}>;


export type QueryQuery = { __typename?: 'Query', isPostBookmarked?: boolean | null };

export type GetBookmarksQueryVariables = Exact<{
  filter?: InputMaybe<GetBookmarksFilter>;
}>;


export type GetBookmarksQuery = { __typename?: 'Query', getBookmarks?: Array<{ __typename?: 'Bookmark', id?: string | null, user?: { __typename?: 'User', id?: string | null, phone?: string | null, fullName?: string | null } | null, post?: { __typename?: 'Post', id?: string | null, name?: string | null, description?: string | null, userId?: string | null, media?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null, postType?: PostType | null } | null } | null> | null };

export type GetCommentsQueryVariables = Exact<{
  filter?: InputMaybe<GetCommentsFilter>;
}>;


export type GetCommentsQuery = { __typename?: 'Query', getComments?: Array<{ __typename?: 'Comment', id?: string | null, message?: string | null, userId?: string | null, postId?: string | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id?: string | null, phone?: string | null, fullName?: string | null } | null, post?: { __typename?: 'Post', id?: string | null, name?: string | null, description?: string | null, userId?: string | null, media?: Array<string | null> | null, postType?: PostType | null, createdAt?: any | null, updatedAt?: any | null } | null } | null> | null };


export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpContent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInContent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const VerifyOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyOtpContent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}]}}]} as unknown as DocumentNode<VerifyOtpMutation, VerifyOtpMutationVariables>;
export const ToggleBookMarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleBookMark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ToggleBookMarkContent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleBookMark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}]}}]} as unknown as DocumentNode<ToggleBookMarkMutation, ToggleBookMarkMutationVariables>;
export const SearchPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SearchPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPostsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postType"}}]}}]}}]} as unknown as DocumentNode<SearchPostsMutation, SearchPostsMutationVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostContent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCommentContent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPostsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postType"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IsPostBookmarkedFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isPostBookmarked"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}]}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const GetBookmarksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBookmarks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetBookmarksFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBookmarks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postType"}}]}}]}}]}}]} as unknown as DocumentNode<GetBookmarksQuery, GetBookmarksQueryVariables>;
export const GetCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCommentsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"postType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetCommentsQuery, GetCommentsQueryVariables>;