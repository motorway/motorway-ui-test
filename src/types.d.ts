export type Tags = string[];

export interface Car {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  description: null | string;
  alt_description: string;
  tags: Tags;
  likes: number;
  user: User;
  url: string;
}

export interface User {
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
