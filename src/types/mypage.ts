export interface MyPageInfoProps {
  name: string;
  email: string;
  location: string;
  imageUrl: string;
}

export interface LearnProfileProps {
  title: string;
  experienceType: string;
  introduce?: string;
  description: string;
}

export interface ReviewsByMeItem {
  id: number;
  type: string;
  title: string;
  appointmentLocation: string;
  appointmentDate: string;
  imageUrl: string;
  name: string;
  age: 0;
  gender: string;
  location: string;
  experienceDetail: string;
  review: string;
  reviewDate: string;
  isWritten: boolean;
}

export interface ReviewsByMeResponse {
  reviews: ReviewsByMeItem[];
}

export type CalendarParams = {
  year: number;
  month: number;
};

export interface MyCalendarListItem {
  date: string;
  tag: string;
  description: string;
  about: string;
}

export interface MyCalendarResponse {
  appointments: MyCalendarListItem[];
}
