import 'react-calendar/dist/Calendar.css';

import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import { useMyCalendar } from '@/hooks/api/useMyPage';

import moment from 'moment';

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());
  //   const setCalendarDate = useSetRecoilState(selectedDate);

  const month = moment(date).format('MM');

  useEffect(() => {
    // setCalendarDate(month);
  }, [month]);

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  //
  const { data } = useMyCalendar({
    year: 2024,
    month: 5,
  });

  console.log('calendar', data);

  return (
    <div>
      <Calendar locale="ko" onChange={() => handleDateChange} value={date} />
    </div>
  );
}
