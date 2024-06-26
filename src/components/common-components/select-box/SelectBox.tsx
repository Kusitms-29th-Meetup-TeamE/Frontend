import { Fragment, useCallback, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { Transition } from '@headlessui/react';

import {
  SelectBoxProps,
  SelectBoxSize,
  SelectItemType,
} from './SelectBox.types';

import clsx from 'clsx';

const style: {
  base: string;
  sizes: Record<SelectBoxSize, string>;
  design: Record<SelectBoxSize, string>;
} = {
  base: 'absolute w-full mt-1 z-50 rounded-[20px] border border-1 border-gray-05 text-gray-06 bg-white',
  sizes: {
    xs: 'text-gray-07 bg-gray-03 rounded-[22px] flex justify-center items-center gap-1 pl-[22px] pr-3 py-[6px] max-w-[97px] max-h-9 w-full h-full whitespace-pre-wrap',
    sm: 'text-white bg-[#FB8C4FCC] border border-chip-active flex items-center justify-between gap-2 border border-red-500 rounded-[30px] px-4 py-1',
    // md - 회원가입 생년월일
    md: 'w-full max-w-[192px] text-h4 h-[68px] bg-white text-gray-06 flex flex-row items-center rounded-[20px] border cursor-pointer border-gray-05 py-5 px-7 justify-between',
    lg: '',
  },
  design: {
    xs: '',
    sm: '',
    md: 'max-w-[192px] max-h-[268px] overflow-y-auto rounded-[20px]',
    lg: '',
  },
};

export default function SelectBox({
  items,
  className,
  setParams,
  size = 'md',
  initText,
}: SelectBoxProps) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [hoverMenu, setHoverMenu] = useState<string | number | null>(null);

  const [selectedItem, setSelectedItem] = useState<string>(
    initText ?? items[0].text,
  );

  const handleBlur = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className={clsx(className, 'w-full relative')}>
      <button
        type="button"
        className={clsx(style.sizes[size], className, '')}
        onMouseDown={() => setIsOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu)}
        onBlur={handleBlur}
      >
        <div
          className={
            size === 'xs'
              ? 'text-gray-07'
              : size === 'sm'
                ? 'text-white'
                : initText === selectedItem
                  ? 'text-gray-06'
                  : 'text-gray-10'
          }
        >
          {selectedItem ? selectedItem : initText ?? `${items[0].text}`}
        </div>

        <span
          className={clsx(
            size === 'xs'
              ? 'text-gray-07'
              : size === 'sm'
                ? 'text-white'
                : initText === selectedItem
                  ? 'text-gray-06'
                  : 'text-gray-10',
          )}
        >
          {isOpenMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      {
        <Transition show={isOpenMenu} as={Fragment}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={clsx(
                'scroll-container',
                style.base,
                style.design[size],
              )}
              onMouseDown={(e) => e.preventDefault()}
            >
              {items.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedItem(item.text);
                      setParams(item.value);
                      setIsOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu);
                    }}
                    onMouseEnter={() => setHoverMenu(item.value)}
                    onMouseLeave={() => setHoverMenu(null)}
                    className={clsx(
                      idx === 0 && 'rounded-t-[20px]',
                      idx === items.length - 1 && 'rounded-b-[20px]',
                      size === 'xs' && 'cursor-pointer pl-[22px] pr-3 py-2',
                      size === 'sm' &&
                        'cursor-pointer px-[17px] py-3 text-chip-medium box-border',
                      size === 'md' &&
                        'cursor-pointer px-7 py-[6px] text-h4 box-border',
                      hoverMenu === item.value &&
                        size === 'md' &&
                        'bg-primary-orange1 !text-h3 text-primary-orange6',
                      hoverMenu === item.value &&
                        size === 'sm' &&
                        'bg-primary-orange1 !text-chip-bold text-primary-orange6',
                    )}
                  >
                    {item.text}
                  </div>
                );
              })}
            </div>
          </Transition.Child>
        </Transition>
      }
    </div>
  );
}
