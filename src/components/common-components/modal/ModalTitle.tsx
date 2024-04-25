import { variants } from './Modal';

import { twMerge } from 'tailwind-merge';

// 모달 Title 컴포넌트(모달의 상단 타이틀)
export default function ModalTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={twMerge(variants.title, className)}>{children}</div>;
}

ModalTitle.defaultProps = {
  className: '',
};
