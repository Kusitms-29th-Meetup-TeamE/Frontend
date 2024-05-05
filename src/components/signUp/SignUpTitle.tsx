import React from 'react';

export type SignUpTitleProps = {
  title: string;
  subTitle: string;
};

const SignUpTitle = (props: SignUpTitleProps) => {
  const { title, subTitle } = props;

  return (
    <div className="w-fit flex flex-col justify-center items-center text-center">
      <div className="mb-[16px] text-h2 text-black">{title}</div>
      <div className="text-gray-08 text-h4 whitespace-pre-wrap">{subTitle}</div>
    </div>
  );
};

export default SignUpTitle;
