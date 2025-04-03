interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  bio: string;
  location: string | null;
  profile_image: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
}

interface Image {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  description: string | null;
  alt_description: string | null;
  categories: string[];
  likes: number;
  url: string;
  user: User;
}