import React, { Dispatch, SetStateAction } from 'react';

import { ModalDefaultProps } from '@/types/modal';

import Button from '../common-components/button';
import { Modal } from '../common-components/modal';

import { useRouter } from 'next/navigation';

const JoinActivityModal = ({ isOpen, setIsOpen }: ModalDefaultProps) => {
  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSchedule = () => {
    router.push('/mypage/calendar');
    handleClose();
  };

  const handleChat = () => {
    router.push('/chat/activity');
    handleClose();
  };

  return (
    <Modal
      className="w-[460px] pt-[46px] pb-[34px]"
      open={isOpen}
      onClose={handleClose}
    >
      <Modal.Title className="pb-[26px]">신청 완료!</Modal.Title>
      <Modal.Description className="whitespace-pre-wrap pb-[34px]">
        캘린더에 일정이 등록되었어요.
        <br />
        또바 활동과 함께 즐거운 시간 보내봐요!
      </Modal.Description>
      <Modal.Footer className="flex gap-[22px]">
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
