import { Dispatch, SetStateAction } from 'react';

import Button from '../button';
import { Modal } from '../modal';
import { OnboardingModalProps } from './GlobalModal.types';

type Props = {
  modalState: OnboardingModalProps;
  setModalState: Dispatch<SetStateAction<OnboardingModalProps>>;
};

// 온보딩 모달 컴포넌트
export default function OnboardingModal({ modalState, setModalState }: Props) {
  const closeModal = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };

  return (
    <Modal className="w-[460px]" open={modalState.open} onClose={closeModal}>
      <Modal.Title>{modalState.title}</Modal.Title>
      <Modal.Close onClick={closeModal} />
      <Modal.Description>{modalState.content}</Modal.Description>
      <Modal.Footer className="flex gap-5">
        <Button color="gray" onClick={closeModal} className="text-nowrap">
          설명 읽기
        </Button>
        <Button color="default" onClick={closeModal}>
          건너뛰기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
