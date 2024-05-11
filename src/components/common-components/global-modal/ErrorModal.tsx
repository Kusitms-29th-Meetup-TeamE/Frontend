import { Dispatch, SetStateAction } from 'react';

import { ErrorModalProps } from '.';
import Button from '../button';
import { Modal } from '../modal';

type Props = {
  modalState: ErrorModalProps;
  setModalState: Dispatch<SetStateAction<ErrorModalProps>>;
  title?: string;
};

/**
 * 에러 알림 모달 - 예외 처리에 사용될 error-modal 컴포넌트
 * @param modalState
 * @param setModalState
 * @returns
 */
export default function ErrorModal({
  title,
  modalState,
  setModalState,
}: Props) {
  const closeModal = () => {
    setModalState((prev) => ({ ...prev, open: false, text: '' }));
  };

  return (
    <Modal className="w-[400px]" open={modalState.open} onClose={closeModal}>
      <Modal.Close onClick={closeModal} />
      <Modal.Title>{title ?? '에러'}</Modal.Title>

      <Modal.Description>{modalState.text}</Modal.Description>

      <Modal.Footer className="flex gap-5">
        <Button size="md" color="default" onClick={closeModal}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
