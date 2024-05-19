export type ActivityType = {
  id?: string;
  title: string;
  location: string;
  time: string;
  imageUrl: string;
  isLiked: boolean;
  personalities: string[];
};

export type LearningType = {
  id?: string;
  imageUrl: string;
  name: string;
  age: number;
  gender: string;
  location: string;
  message: string;

  title: string;
};
