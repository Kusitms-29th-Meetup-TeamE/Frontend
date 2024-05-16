import { IoClose } from 'react-icons/io5';

import { variants } from './Modal';

import clsx from 'clsx';

export default function ModalClose({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <div className="flex justify-end cursor-pointer">
      <IoClose
        type="button"
        className={
          (clsx(variants.close, className),
          'text-gray-09 hover:bg-gray-03 hover:rounded !text-h2')
        }
        onClick={onClick}
      />
    </div>
  );
}
