import { Dispatch, SetStateAction } from 'react';

import { SuccessModalProps } from '.';
import { Modal } from '../modal';

type Props = {
  modalState: SuccessModalProps;
  setModalState: Dispatch<SetStateAction<SuccessModalProps>>;
};

/**
 * 이벤트 처리 성공 및 확인 모달 컴포넌트
 * @param modalState
 * @param setModalState
 * @returns
 */
export default function SuccessModal({ modalState, setModalState }: Props) {
  const closeModal = () => {
    setModalState((prev) => ({ ...prev, open: false, text: '' }));
  };

  return (
    <Modal className="w-[400px]" open={modalState.open} onClose={closeModal}>
      <Modal.Title>
        <span>알림</span>
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
