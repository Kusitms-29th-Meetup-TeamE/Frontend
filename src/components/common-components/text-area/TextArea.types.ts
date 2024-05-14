export type TextAreaProps = {
  className?: string;
  size: string;
  placeHolder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
