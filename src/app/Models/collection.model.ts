export interface Collection {
  id: string;
  title: string;
  description: string;
  status: string;
  banner: string;
  creation_date: string;
  publication_date: string | null;
  remaining_tokens: number;
  token_quantity: number;
  floor_price: number;
  image_url: string;
  tags: string[];
  history: HistoryItem[];
  rewards: Reward[];
}

interface HistoryItem {
  // Assuming a structure; adjust according to actual data fields
  event: string;
  date: string;
  details: string;
}

interface Reward {
  // Assuming a structure; adjust according to actual data fields
  type: string;
  value: number;
}
