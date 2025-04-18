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

export const endpoints = {
  ...AuthEndpoints,
  ...PostEndpoints,
};
