import { Fragment, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { Transition } from '@headlessui/react';

import {
  DropdownSize,
  SelectBoxProps,
  SelectItemType,
} from './SelectBox.types';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const style: {
  base: string;
  sizes: Record<DropdownSize, string>;
  design: Record<DropdownSize, string>;
} = {
  base: 'absolute w-full mt-1 z-50 overflow-y-auto rounded-[20px] border border-1 border-gray-05 text-gray-06 bg-white',
  sizes: {
    sm: '',
    // md - 회원가입 생년월일
    md: 'w-full max-w-[192px] text-h4 h-[68px] bg-white text-gray-06 flex flex-row items-center rounded-[20px] border cursor-pointer border-gray-05 py-5 px-7 justify-between',
    lg: '',
  },
  design: {
    sm: '',
    md: 'px-7 py-[6px] text-h4 max-w-[192px] max-h-[268px] overflow-y-auto',
    lg: '',
  },
};

export default function SelectBox({
  items,
  className,
  setParams,
  size = 'md',
}: SelectBoxProps) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);

  const [selectedItem, setSelectedItem] = useState<string>(items[0].text);

  const handleBlur = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className={clsx(className, 'w-full relative')}>
      <button
        type="button"
        className={clsx(style.sizes[size], '')}
        onMouseDown={() => setIsOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu)}
        onBlur={handleBlur}
      >
        <div>{selectedItem ? `${selectedItem}` : `${items[0].text}`}</div>
        {isOpenMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
              className={clsx(style.base, style.design[size])}
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
                      idx === 0 && 'rounded-t', // 첫 번째 항목에 rounded 추가
                      idx === items.length - 1 && 'rounded-b', // 마지막 항목에 rounded 추가
                      'cursor-pointer px-[5px] py-4',
                      hoverMenu === item.value && 'bg-yellow-300',
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
