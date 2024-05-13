import { IoClose } from 'react-icons/io5';

import { variants } from './Modal';

import clsx from 'clsx';

export default function ModalClose({
  className,
  onClick,
  isNotClosed,
}: {
  className?: string;
  onClick: () => void;
  isNotClosed?: boolean;
}) {
  return (
    <div className="flex justify-end cursor-pointer">
      <IoClose
        type="button"
        className={
          (clsx(variants.close, className),
          'text-gray-09 hover:bg-gray-03 hover:rounded !text-h2')
        }
        onClick={!isNotClosed ? onClick : () => {}}
      />
    </div>
  );
}

ModalClose.defaultProps = {
  className: '',
};
