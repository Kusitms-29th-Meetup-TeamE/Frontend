export type LearningType = {
  id?: string;
  type: string;
  title: string;
  imageUrl: string;
  name: string;
  age: number;
  gender: string;
  location: string;
  message: string;
};

export type ReviewSliderProps = {
  id?: string;
  title: string;
  content: string;
  writer: string;
  date: string;
};

export type OthreLearningItemProps = {
  type: string;
  title: string;
};

export type LearningRequestType = {
  page: number;
  sort: string;
  category: string;
};
