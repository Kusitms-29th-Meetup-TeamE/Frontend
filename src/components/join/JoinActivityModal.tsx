import React, { Dispatch, SetStateAction } from 'react';

import Button from '../common-components/button';
import { Modal } from '../common-components/modal';

export type JoinActivityModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const JoinActivityModal = ({ isOpen, setIsOpen }: JoinActivityModalProps) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSchedule = () => {
    setIsOpen(false);
  };

  const handleChat = () => {};
  return (
    <Modal className="w-[460px]" open={isOpen} onClose={handleClose}>
      <Modal.Close onClick={handleClose} isNotClosed={true} />
      <Modal.Title>신청 완료!</Modal.Title>
      <Modal.Description className="whitespace-pre-wrap">
        캘린더에 일정이 등록되었어요.
        <br />
        또바 활동과 함께 즐거운 시간 보내봐요!
      </Modal.Description>
      <Modal.Footer className="flex gap-5">
        <Button
          color="gray"
          onClick={handleSchedule}
          className="text-nowrap text-notification-chip-no"
        >
          일정 확인하기
        </Button>
        <Button
          color="default"
          onClick={handleChat}
          className="text-nowrap text-notification-chip-yes"
        >
          대화방으로 이동
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JoinActivityModal;
