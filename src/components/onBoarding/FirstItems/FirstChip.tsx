import React from 'react';

import Chip from '@/components/common-components/chip/Chip';

export type FirstChipProps = {
  chipLabel: string;
  content: string;
};

const FirstChip = (props: FirstChipProps) => {
  const { chipLabel, content } = props;

  return (
    <div className="w-[180px] px-[10px] pt-[14px] pb-[17px] flex flex-col gap-[5px] rounded-[20px] bg-white whitespace-nowrap">
      <Chip text={chipLabel} className="py-[6px] px-5" />
      <div className="ml-2 text-gray-11 text-notification-chip-yes">
        {content}
      </div>
    </div>
  );
};

export default FirstChip;
