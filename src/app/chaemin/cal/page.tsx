'use client';

import '@/styles/calendar.css';
import 'react-calendar/dist/Calendar.css';

import { useEffect, useMemo, useState } from 'react';
import Calendar from 'react-calendar';

import { useMyCalendar } from '@/hooks/api/useMyPage';
import { MyCalendarListItem } from '@/types/mypage';

import moment from 'moment';

export default function MyCalendarTestPage() {
  const [date, setDate] = useState(new Date());
  //   const setCalendarDate = useSetRecoilState(selectedDate);

  const month = moment(date).format('MM');

  useEffect(() => {
    // setCalendarDate(month);
  }, [month]);

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  const { data } = useMyCalendar({
    year: 2024,
    month: 5,
  });

  const toMeetList: MyCalendarListItem[] = useMemo(
    () => data?.appointments ?? [],
    [data],
  );

  console.log('toMeetList', toMeetList);

  return (
    <div className="flex w-full border border-black">
      <Calendar
        formatDay={(locale, date) => moment(date).format('D')}
        locale="ko"
        onChange={() => handleDateChange}
        value={date}
        calendarType="gregory"
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
      />
    </div>
  );
}
