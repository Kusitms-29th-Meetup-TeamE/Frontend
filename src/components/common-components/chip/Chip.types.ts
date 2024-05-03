export type ChipProps = {
  className?: string;
  color: ChipColor;
  text: string;
};

export const chipColors = {
  orange: 'orange',
  blue: 'blue',
  purple: 'purple',
  green: 'green',
  pink: 'pink',
  yellow: 'yellow',
  type: 'type',
} as const;
export type ChipColor = (typeof chipColors)[keyof typeof chipColors];
