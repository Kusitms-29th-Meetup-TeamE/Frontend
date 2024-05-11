import { Dispatch, SetStateAction } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

import { Modal } from '../common-components/modal';

export type SearchAddressModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  //   onClose: () => void;
  setLocation: (value: SetStateAction<string>) => void;
};

export default function SearchAddressModal(props: SearchAddressModalProps) {
  const { isOpen, setLocation, setIsOpen } = props;

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setLocation(data.roadAddress);
    // setIsOpen((prev) => !prev);
    onToggleModal();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onToggleModal}
      className="w-full max-w-[600px] h-[590px]"
    >
      <Modal.Close onClick={onToggleModal} />
      <Modal.Title>주소 검색</Modal.Title>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        style={{ height: '520px' }}
      />
    </Modal>
  );
}
