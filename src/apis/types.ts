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

export enum PostType {
  Giveaway = "giveaway",
  Request = "request",
}
