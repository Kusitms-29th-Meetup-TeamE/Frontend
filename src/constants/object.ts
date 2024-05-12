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

export const yearItems: SelectItemType[] = []; //

const currentYear = new Date().getFullYear();
const startYear = 1900; // 시작 연도
const endYear = currentYear; // 현재 연도

for (let year = startYear; year <= endYear; year++) {
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
