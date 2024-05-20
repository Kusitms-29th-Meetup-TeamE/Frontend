import React from 'react';

import Image from 'next/image';

export type CheckboxProps = {
  width: number;
  height: number;
  isLogin?: boolean;
  isChecked: boolean;
  handleCheck?: () => void;
};

const Checkbox = (props: CheckboxProps) => {
  const { width, height, isLogin = false, isChecked, handleCheck } = props;

  return (
    <Image
      src={
        isChecked
          ? '/assets/components/check_box_orange06.svg'
          : isLogin
            ? '/assets/components/check_box_gray08.svg'
            : '/assets/components/check_box_gray06.svg'
      }
      alt={''}
      width={width}
      height={height}
      onClick={handleCheck}
      className="object-cover"
    />
  );
};

export default Checkbox;
