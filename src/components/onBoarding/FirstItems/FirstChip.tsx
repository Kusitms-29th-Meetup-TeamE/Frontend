import React from 'react';

import Chip from '@/components/common-components/chip/Chip';

export type ChipType = {
  chipLabel: string;
  content: string;
};

const FirstChip = (/*props: ChipType*/) => {
  //   const { chipLabel, content } = props;

  return (
    <div className="max-w-[180px] w-full px-[10px] pt-[14px] pb-[17px] flex flex-col gap-[5px] rounded-5 bg-white">
      <Chip text={'자연친화적인'} className="py-[6px] px-5" />
      <div className="ml-2 text-gray-11 text-notification-chip-yes">
        자연의 맛 요리 배우기
      </div>
    </div>
  );
};

export default FirstChip;
