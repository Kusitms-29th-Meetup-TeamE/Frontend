export const trimDateString = (text: string) => {
  return text.replace(/(\d{4}년 \d{2}월 \d{2}일)/, '').trim();
};

export const dateToUTC = (year: number, month: number, day: number) => {
  const kstDate = new Date(year, month - 1, day);
  const KST_OFFSET = 9 * 60 * 60 * 1000;
  const utcDate = new Date(kstDate.getTime() + KST_OFFSET);

  return utcDate;
};
