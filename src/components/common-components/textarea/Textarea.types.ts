export type TextareaProps = {
  className?: string;
  size: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
