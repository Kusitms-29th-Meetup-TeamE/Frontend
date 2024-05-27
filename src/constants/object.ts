import { SelectItemType } from '@/components/common-components/select-box';

export const monthItems: SelectItemType[] = [
  { id: 1, text: '1월', value: 1 },
  { id: 2, text: '2월', value: 2 },
  { id: 3, text: '3월', value: 3 },
  { id: 4, text: '4월', value: 4 },
  { id: 5, text: '5월', value: 5 },
  { id: 6, text: '6월', value: 6 },
  { id: 7, text: '7월', value: 7 },
  { id: 8, text: '8월', value: 8 },
  { id: 9, text: '9월', value: 9 },
  { id: 10, text: '10월', value: 10 },
  { id: 11, text: '11월', value: 11 },
  { id: 12, text: '12월', value: 12 },
];

export const categoryItem: SelectItemType[] = [
  { id: 1, text: '운동', value: '운동' },
  { id: 2, text: '요리', value: '요리' },
  { id: 3, text: '예술', value: '예술' },
  { id: 4, text: '창작', value: '창작' },
  { id: 5, text: '외국어', value: '외국어' },
  { id: 6, text: '디지털', value: '디지털' },
  { id: 7, text: '기타', value: '기타' },
];

export const yearItems: SelectItemType[] = []; //

const currentYear = new Date().getFullYear();
const startYear = currentYear - 80; // 시작 연도
const endYear = currentYear - 10; // 현재 연도

for (let year = endYear; year >= startYear; year--) {
  yearItems.push({
    id: year,
    text: `${year}년`,
    value: year,
  });
}

export const dayItems: SelectItemType[] = [];

for (let day = 1; day <= 31; day++) {
  dayItems.push({
    id: day,
    text: `${day}일`,
    value: day,
  });
}

// 약속잡기에 필요한 연도 설정

export const AppointmentYearItems: SelectItemType[] = []; //

for (let year = currentYear; year <= currentYear + 10; year++) {
  AppointmentYearItems.push({
    id: year,
    text: `${year}년`,
    value: year,
  });
}

export const agentItmes: string[] = [
  '전체',
  '문화센터',
  '복지관',
  '동호회',
  '자원봉사',
  '원데이 클래스',
  '기타',
];

export const personalityItmes: string[] = [
  '활발한',
  '학문적인',
  '창의적인',
  '배울 수 있는',
  '평화로운',
  '예술적인',
  '자연친화적인',
];

export const learningCategoryItems: string[] = [
  '전체',
  '운동',
  '요리',
  '예술',
  '창작',
  '외국어',
  '디지털',
  '기타',
];

export const sortItems: SelectItemType[] = [
  { id: 1, text: '최신순', value: 'latest' },
  { id: 2, text: '후기순', value: 'review' },
  { id: 3, text: '거리순', value: 'latest' },
];

export const pointNotice = [
  {
    text: '‘활동참여하기’에서 활동을 신청했다면',
    point: '100',
  },
  {
    text: '‘배움나누기’에 프로필을 처음 등록했다면',
    point: '100',
  },
  {
    text: '‘배움나누기’에서 1:1 약속을 확정했다면',
    point: '50',
  },
  {
    text: '‘활동대화방’에서 약속을 잡았다면',
    point: '50',
  },
  {
    text: '‘배움나누기’에서 후기를 작성했다면',
    point: '30',
  },
  {
    text: '오늘 또바에 접속해 로그인을 했다면',
    point: '30',
  },
];

export const noticeData = [
  {
    img: '/assets/main/notice.png',
    title: '또바 공지사항',
    subTitle: '또바 사용에 필요한 공지사항을 알려드립니다.',
    content: [
      '[이벤트] 내 친구를 또바에 초대하면 친구에게도, 나에게도 선물이!',
      '[이벤트] 활동 후기 올리고 포인트 받아가세요!',
      '[안내] 또바 서비스 점검 시간 안내',
      '[안내] 또바 사용방법 안내',
    ],
  },
  {
    img: '/assets/main/faq.png',
    title: '자주 하는 질문',
    subTitle: '또바에게 자주 하시는 질문에 답해드립니다.',
    content: [
      'Q. 활동 참여를 하려면 어떻게 해야 하나요?',
      'Q. 나의 위치 수정은 어디서 하면 되나요?',
      'Q. 포인트는 어떻게 사용하나요?',
      'Q. 활동 신청 내역은 어디서 확인하나요?',
    ],
  },
];

export const reviewData = [
  {
    id: 1,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 2,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 3,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 4,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 5,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 6,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 7,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
];

export const howData = [
  {
    title: '내가 하고 싶은 활동을 찾고 있다면',
    imgUrl: '/assets/main/how1.png',
    goToText: '활동 참여하기',
    goToUrl: '/join',
  },
  {
    title: '알찬 내 인생을 위해 배움을 찾고 있다면',
    imgUrl: '/assets/main/how2.png',
    goToText: '배움 나누기',
    goToUrl: '/share',
  },
  {
    title: '내 배움을 누군가에게 나누고 싶다면',
    imgUrl: '/assets/main/how3.png',
    goToText: '함께 대화하기',
    goToUrl: '/chat',
  },
];

export const onboardingData = [
  { 활발한: '매주 한 번 테니스' },
  { 창의적인: '창의적인 사고 배우기' },
  { 평화로운: '요가 명상 클래스' },
  { 활발한: '아침 건강 등산' },
  { 자연친화적인: '자연의 맛 요리 배우기' },
  { 예술적인: '형형색색 크레파스' },
];
