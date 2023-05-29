export type User = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  bio: string;
  location: string | null;
  profile_image: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
}

export type CarImage = {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  description: string | null;
  alt_description: string;
  categories: string[];
  likes: number;
  user: User;
  url: string;
}