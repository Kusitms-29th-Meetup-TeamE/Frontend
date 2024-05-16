import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import { ModalProps } from './Modal.types';
import { ModalProvider } from './ModalContext';

import clsx from 'clsx';

// TODO: 디자인 시스템 받으면 스타일 변경 필요
export const variants = {
  container:
    'p-[48px] rounded-[20px] overflow-hidden flex flex-col ml-auto mr-auto bg-white border border-gray-40',
  title:
    'p-[20px] pt-0 flex items-center justify-center text-notification-h1 text-primary-orange6 ',
  // subTitle: 'pt-[16px] flex items-center justify-center text-body2',
  description: 'pb-[25px] text-gray-08 text-notification-b1 text-center',
  footer: 'h-[50px] flex justify-center items-center',
  close: 'cursor-pointer items-center rounded-lg p-[6px] text-gray-11',
};

function ModalContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={clsx(variants.container, className)}>{children}</div>;
}

// 모달 오픈 시 배경 흐려지게 하는 컴포넌트
function BackDrop() {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-black/30"
        aria-hidden="true"
      />
    </Transition.Child>
  );
}

function ModalMain({
  open,
  onClose,
  ariaLabel,
  className,
  initialFocus,
  disableKeyboardEvent,
  children,
}: ModalProps) {
  return (
    <ModalProvider>
      <Transition show={open} as={Fragment}>
        <Dialog
          onClose={() => (disableKeyboardEvent ? {} : onClose())}
          initialFocus={initialFocus}
          className="relative z-50"
          id="ddoba-modal"
          aria-label={ariaLabel}
        >
          <BackDrop />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-screen">
              <ModalContainer className={className}>{children}</ModalContainer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </ModalProvider>
  );
}

export default ModalMain;
