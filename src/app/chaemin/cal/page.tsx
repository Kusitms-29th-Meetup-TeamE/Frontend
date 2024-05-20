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

  const dateList = useMemo(
    () => toMeetList.map((appointment) => appointment.date),
    [toMeetList],
  );

  return (
    <div className="flex w-full border border-black">
      <Calendar
        formatDay={(locale, date) => moment(date).format('D')}
        locale="ko"
        onChange={() => handleDateChange}
        value={date}
        calendarType="gregory"
        next2Label={null}
        prev2Label={null}
        tileContent={({ date, view }) => {
          if (
            view === 'month' &&
            dateList.includes(moment(date).format('YYYY-MM-DD'))
          ) {
            const toMeetItems = toMeetList.filter(
              (item) =>
                moment(item.date).format('YYYY-MM-DD') ===
                moment(date).format('YYYY-MM-DD'),
            );
            console.log('sisi', toMeetItems);
            return (
              <div className="flex justify-center items-center absoluteDiv">
                {toMeetItems.map((item, index) => (
                  <div key={index} className="appointment">
                    {item.tag}
                  </div>
                ))}
              </div>
            );
          }
        }}
      />
    </div>
  );
}
