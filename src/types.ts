export type Image = {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  description: string;
  alt_description: string;
  categories: string[];
  likes: number;
  user: User;
  url: string;
  index: number;
}

type User = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  bio: string;
  location: string;
  profile_image: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
}