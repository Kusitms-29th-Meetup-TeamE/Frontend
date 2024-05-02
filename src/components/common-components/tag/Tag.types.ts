export type TagProps = {
  className?: string;
  color: TagColor;
  text: string;
};

export const tagColors = {
  orange: 'orange',
  white: 'white',
} as const;
export type TagColor = (typeof tagColors)[keyof typeof tagColors];
