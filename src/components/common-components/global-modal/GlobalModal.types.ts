export type SuccessModalProps = {
  open: boolean;
  text: string;
  subText?: string | JSX.Element;
};

export type ErrorModalProps = {
  open: boolean;
  text?: string;
  subText?: string | JSX.Element;
};

export type OnboardingModalProps = {
  open: boolean;
  // subText?: string | JSX.Element;
  title: string;
  content: string;
};
