export const server = "http://localhost:9000";

export const AuthEndpoints = {
  signIn: `${server}/signin`,
  signUp: "",
  verifyOtp: `${server}/verify-otp`,
};

export const PostEndpoints = {
  getPosts: "",
  createPosts: "",
};

export const endpoints = {
  ...AuthEndpoints,
  ...PostEndpoints,
};
