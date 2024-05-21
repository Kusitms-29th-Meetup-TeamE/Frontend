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

export type ReviewItemType = {
  title: string;
  content: string;
  name: string;
  date: string;
};

export type ReviewProps = {
  type: string;
  reviews: ReviewItemType[];
};

export type ReviewSliderProps = {
  reviewList: ReviewProps[];
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

export type LearningProfileType = {
  imageUrl: string;
  name: string;
  age: number;
  gender: string;
  location: string;
  experiences: [
    {
      type: 'string';
      message: 'string';
    },
  ];
};
