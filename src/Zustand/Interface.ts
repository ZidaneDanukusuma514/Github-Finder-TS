interface repoProps {
  id: number | null;
  name: string;
  description: string;
  url: string;
}

export interface currentUserprops {
  id?: number;
  user?: string;
  avatar_url?: string;
  repos?: any[];
}

export interface Storeprop {
  count: number;
  currentUser?: any;
  getData?: (data: any) => void;
}
