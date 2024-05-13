import { variants } from './Modal';

import clsx from 'clsx';

// 모달 Title 컴포넌트(모달의 상단 타이틀)
export default function ModalTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        variants.title,
        className,
        // 'text-primary-orange6 text-notification-h1',
      )}
    >
      {children}
    </div>
  );
}
