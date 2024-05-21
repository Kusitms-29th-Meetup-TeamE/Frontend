import React from 'react';
import { MdOutlineChevronRight } from 'react-icons/md';

import { OthreLearningItemProps } from '@/types/activity';

import Chip from '../common-components/chip';

const OtherLearningItem = (props: OthreLearningItemProps) => {
  const { type, title } = props;
  return (
    <div className="h-[74px] px-5 flex items-center rounded-[20px] shadow-[0px_4px_30px_10px_rgba(0,0,0,0.04)] whitespace-nowrap cursor-pointer">
      <Chip text={type} className="w-[53px] h-7" />
      <span className="ml-[18px] mr-6 text-body2 text-black">{title}</span>
      <MdOutlineChevronRight className="w-4 h-4 text-[rgba(251,140,79,0.8)]" />
    </div>
  );
};

export default OtherLearningItem;
