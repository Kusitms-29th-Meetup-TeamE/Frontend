export type RecommendItemProps = {
  id?: number;
  title: string;
  location: string;
  maxParticipants?: number;
  currentParticipants?: number;
  time: string;
  img: string;
  isLiked: boolean;
  className?: string;
  personalities?: string[] | string;
  isLoading?: boolean;
  isHoverSet?: boolean;
};

export type ActivityType = {
  id: number;
  title: string;
  agency: string;
  agencyTypes: string;
  location: string;
  personality: string;
  time: string;
  activityThumbnail: string;
  liked: boolean;
};

export type AllActivity = {
  curPage: number;
  pageCount: number;
  activitySummaries: ActivityType[];
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

export type ActivityContainerProps = {
  // data: ActivityType[];
  className?: string;
  children: React.ReactNode;
};

export type DetailProps = {
  params: { id: number };
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
