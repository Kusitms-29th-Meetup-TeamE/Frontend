import React from 'react';

import Chip from '@/components/common-components/chip';

import { agentItmes, personalityItmes } from '@/constants/object';

import clsx from 'clsx';

type ChipContainerProps = {
  className?: string;
};

const ChipContainer = (props: ChipContainerProps) => {
  const { className } = props;

  return (
    <div className={clsx('py-[33px] pl-10 flex flex-col gap-7', className)}>
      <div className="flex gap-10">
        <div className="text-h3">활동 기관</div>
        <div className="flex gap-[29px]">
          {agentItmes.map((item, key) => (
            <Chip
              key={key}
              text={item}
              size="md"
              focusType="disabledDark"
              isBtn={true}
              isSelected={false}
              isPersonality={false}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-10">
        <div className="text-h3">활동 성격</div>
        <div className="flex gap-[29px]">
          {personalityItmes.map((item, key) => (
            <Chip
              key={key}
              text={item}
              size="md"
              focusType="disabledDark"
              isBtn={true}
              isSelected={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChipContainer;
