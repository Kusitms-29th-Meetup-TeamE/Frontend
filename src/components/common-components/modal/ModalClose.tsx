// import CloseIcon from "@mui/icons-material/Close";
import { variants } from './Modal';

import { twMerge } from 'tailwind-merge';

export default function ModalClose({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <div className="flex justify-end cursor-pointer">
      {/* TODO: icon library 선택 후 수정 필요 */}
      {/* <CloseIcon
        type="button"
        className={
          (twMerge(variants.close, className),
          "text-black hover:bg-gray-20 hover:rounded")
        }
        onClick={onClick}
      /> */}
    </div>
  );
}

ModalClose.defaultProps = {
  className: '',
};
