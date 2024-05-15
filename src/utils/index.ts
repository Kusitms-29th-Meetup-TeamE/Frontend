export const trimDateString = (text: string) => {
  return text.replace(/(\d{4}년 \d{2}월 \d{2}일)/, '').trim();
};
