export const server = "http://localhost:9000";

export const AuthEndpoints = {
  signIn: `${server}/signin`,
  signUp: "",
};

export const PostEndpoints = {
  getPosts: "",
  createPosts: "",
};

export const endpoints = {
  ...AuthEndpoints,
  ...PostEndpoints,
};
