export type Tags = string[];

export interface CarDTO {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  description: null | string;
  alt_description: string;
  tags: Tags;
  likes: number;
  user: UserDTO;
  url: string;
}

export interface UserDTO {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  bio: string;
  location: null | string;
  profile_image: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
}

export interface Car {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  color: string;
  description: null | string;
  altDescription: string;
  tags: string[];
  likes: number;
  user: User;
  url: string;
}

export interface User {
  id: string;
  updatedAt: Date;
  username: string;
  name: string;
  firstName: string;
  lastName: null | string;
  bio: string;
  location: null | string;
  profileImage: string;
  totalCollections: number;
  totalLikes: number;
  totalPhotos: number;
}

