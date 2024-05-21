'use client';

import '@/styles/calendar.css';
import 'react-calendar/dist/Calendar.css';

import { useEffect, useMemo, useState } from 'react';
import Calendar from 'react-calendar';

import { useMyCalendar } from '@/hooks/api/useMyPage';
import { MyCalendarListItem } from '@/types/mypage';

import clsx from 'clsx';
import moment from 'moment';

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const month = Number(moment(date).format('MM'));
  const year = Number(moment(date).format('YYYY'));

  console.log('date', month, year);

  const { data, isLoading, isPlaceholderData } = useMyCalendar({
    year: year,
    month: month,
  });

  useEffect(() => {}, [month]);

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
    <div className="flex flex-col w-full border border-black">
      <Calendar
        formatDay={(locale, date) => moment(date).format('D')}
        locale="ko"
        onChange={(value) => setDate(value as Date)}
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
              <div className="w-full flex flex-col items-center">
                {toMeetItems.map((item, index) => (
                  <div
                    key={index}
                    className={clsx(
                      'mt-[2px] w-full py-[7px] px-2 rounded-[15px] border text-chip-semibold-sm text-start',
                      item.description.includes('배움 나누기') &&
                        'bg-secondary-violet2 border-secondary-violet7 text-secondary-violet7',
                      item.description.includes('약속') &&
                        'bg-[#FFF8DD] border-chip-creative text-[#EFBA00]',
                      item.description.includes('활동 참여') &&
                        'bg-primary-orange2 border-primary-orange5 text-primary-orange6',
                    )}
                  >
                    {item.tag}
                  </div>
                ))}
              </div>
            );
          }
        }}
      />
      <div> selected date : {moment(date).format('YYYY년 MM월 DD일')}</div>
    </div>
  );
}
