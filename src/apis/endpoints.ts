export const server = "http://localhost:9000";

export const AuthEndpoints = {
  signIn: `${server}/signin`,
  signUp: `${server}/register`,
  verifyOtp: `${server}/verify-otp`,
};

export const PostEndpoints = {
  getPosts: `${server}/get-posts`,
  createPost: `${server}/create-post`,
};

export const BookmarkEndpoints = {
  toggleBookmark: `${server}/toggle-bookmark`,
  getBookmarks: `${server}/get-bookmarks`,
  isPostBookmarked: `${server}/is-post-bookmarked`,
};

export const CommentEndpoints = {
  getComments: `${server}/get-comments`,
  createComment: `${server}/create-comment`,
};

export const endpoints = {
  ...AuthEndpoints,
  ...PostEndpoints,
  ...BookmarkEndpoints,
  ...CommentEndpoints,
};
