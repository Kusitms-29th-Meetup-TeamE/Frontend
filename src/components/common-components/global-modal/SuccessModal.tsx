import { Dispatch, SetStateAction } from 'react';

import { SuccessModalProps } from '.';
import Button from '../button/Button';
import { Modal } from '../modal';

type Props = {
  modalState: SuccessModalProps;
  setModalState: Dispatch<SetStateAction<SuccessModalProps>>;
  title?: string;
};

/**
 * 이벤트 처리 성공 및 확인 모달 컴포넌트
 * @param modalState
 * @param setModalState
 * @returns
 */
export default function SuccessModal({
  title,
  modalState,
  setModalState,
}: Props) {
  const closeModal = () => {
    setModalState((prev) => ({ ...prev, open: false, text: '' }));
  };

  return (
    <Modal className="w-[400px]" open={modalState.open} onClose={closeModal}>
      <Modal.Title>{title ?? '알림'}</Modal.Title>
      <Modal.Close onClick={closeModal} />
      <Modal.Description>{modalState.text}</Modal.Description>
      <Modal.Footer className="flex gap-5">
        <Button size="md" color="default" onClick={closeModal}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
