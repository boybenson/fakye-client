export type User = {
  AuthOtp: string;
  CreatedAt: string;
  ID: number;
  Name: string;
  Phone: string;
  UpdatedAt: string;
  token: string;
};

export type CreatePostPayload = {
  name: string;
  description: string;
  type: string;
  userId: number;
  media: string[];
  showLocation: boolean;
  latitude: string;
  longitude: string;
};

export type Post = {
  id: number;
  name: string;
  description: string;
  user: User;
  media: any;
  createdAt: Date;
  updatedAt: string;
  postType: string;
  showLocation: boolean;
  latitude: string;
  longitude: string;
  commentsCount: number;
};

export enum PostType {
  Giveaway = "giveaway",
  Request = "request",
}
