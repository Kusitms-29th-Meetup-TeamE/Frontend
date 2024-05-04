import React from 'react';

import Image from 'next/image';

export type CheckBoxProps = {
  width: number;
  height: number;
  isLogin?: boolean;
  isChecked: boolean;
  handleCheck: () => void;
};

const CheckBox = (props: CheckBoxProps) => {
  const { width, height, isLogin = false, isChecked, handleCheck } = props;

  return (
    <Image
      src={
        isChecked
          ? '/assets/check_box_orange06.svg'
          : isLogin
            ? '/assets/check_box_gray08.svg'
            : '/assets/check_box_gray06.svg'
      }
      alt={''}
      width={width}
      height={height}
      onClick={handleCheck}
    />
  );
};

export default CheckBox;
