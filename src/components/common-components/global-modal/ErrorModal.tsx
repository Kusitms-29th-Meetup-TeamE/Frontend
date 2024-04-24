import { Dispatch, SetStateAction } from 'react';

import { ErrorModalProps } from '.';
import { Modal } from '../modal';

type Props = {
  modalState: ErrorModalProps;
  setModalState: Dispatch<SetStateAction<ErrorModalProps>>;
};

/**
 * 에러 알림 모달 - 예외 처리에 사용될 error-modal 컴포넌트
 * @param modalState
 * @param setModalState
 * @returns
 */
export default function ErrorModal({ modalState, setModalState }: Props) {
  const closeModal = () => {
    setModalState((prev) => ({ ...prev, open: false, text: '' }));
  };

  return (
    <Modal className="w-[400px]" open={modalState.open} onClose={closeModal}>
      <Modal.Title>
        <span>error</span>
        <Modal.Close onClick={closeModal} />
      </Modal.Title>
      <Modal.Description>{modalState.text}</Modal.Description>

      <Modal.Footer>
        {/* TODO: 커스텀 버튼 컴포넌트로 변경 필요 */}
        <button onClick={closeModal}>confirm</button>
      </Modal.Footer>
    </Modal>
  );
}
