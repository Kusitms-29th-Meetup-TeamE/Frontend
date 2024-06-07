import moment from 'moment';

export const trimDateString = (text: string) => {
  return text.replace(/(\d{4}년 \d{2}월 \d{2}일)/, '').trim();
};

export const dateToUTC = (year: number, month: number, day: number) => {
  const kstDate = new Date(year, month - 1, day);
  const KST_OFFSET = 9 * 60 * 60 * 1000;
  const utcDate = new Date(kstDate.getTime() + KST_OFFSET);

  return utcDate;
};

export const formatDate = (d: string | Date) => {
  if (!d) return '-';
  return moment(d).local().format('YYYY-MM-DD HH:mm:ss');
};

export const formatSimpleDate = (d: string) => {
  if (!d) return '-';
  let parts = d.split(' ');
  return parts[0] + ' ' + parts[1] + ' ' + parts[2];
};

export const strToDate = (d: string) => {
  if (!d) return null;

  const dateRegex = /(\d{4})년 (\d{1,2})월 (\d{1,2})일/;
  const match = d.match(dateRegex);

  if (!match) return null;

  const [, year, month, day] = match.map(Number);

  return new Date(year, month - 1, day);
};
