import { variants } from './Modal';

import { twMerge } from 'tailwind-merge';

// 모달 Description 컴포넌트(모달의 설명) - 모달 기본 body 영역
export default function ModalDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={twMerge(variants.description, className)}>{children}</div>
  );
}

ModalDescription.defaultProps = {
  className: '',
};
