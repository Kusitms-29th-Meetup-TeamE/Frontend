export type RecommendItemProps = {
  id?: number;
  title: string;
  location: string;
  maxParticipants?: number;
  currentParticipants?: number;
  time: string;
  imageUrl: string;
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

export type ActivityRequestProps = {
  page: number;
  agencyTypes?: string;
  personalities: string[];
};

export type ActivityContainerProps = {
  // data: ActivityType[];
  className?: string;
  children: React.ReactNode;
};

export type DetailProps = {
  params: { id: number };
};
