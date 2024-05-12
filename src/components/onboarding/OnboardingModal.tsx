import { Dispatch, SetStateAction } from 'react';

import Button from '../common-components/button';
import { Modal } from '../common-components/modal';

import { useRouter } from 'next/navigation';

export type OnboardingModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  content: string;
};

// 온보딩 모달 컴포넌트
export default function OnboardingModal(props: OnboardingModalProps) {
  const { isOpen, setIsOpen, title, content } = props;
  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSkip = () => {
    setIsOpen(false);
    router.push('/');
  };

  return (
    <Modal className="w-[460px]" open={isOpen} onClose={handleClose}>
      <Modal.Title>{title}</Modal.Title>
      <Modal.Close onClick={handleClose} />
      <Modal.Description>{content}</Modal.Description>
      <Modal.Footer className="flex gap-5">
        <Button color="gray" onClick={handleClose} className="text-nowrap">
          설명 읽기
        </Button>
        <Button color="default" onClick={handleSkip}>
          건너뛰기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
