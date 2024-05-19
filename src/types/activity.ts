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

export type DetailProps = {
  params: { id: string };
};

export type ReviewSliderProps = {
  id?: string;
  title: string;
  content: string;
  writer: string;
  date: string;
};
