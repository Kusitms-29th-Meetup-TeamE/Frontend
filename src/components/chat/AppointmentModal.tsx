import { Dispatch, SetStateAction, useState } from 'react';

import {
  AppointmentYearItems,
  dayItems,
  monthItems,
  yearItems,
} from '@/constants/object';

import Button from '../common-components/button';
import Input from '../common-components/input';
import { Modal } from '../common-components/modal';
import SelectBox from '../common-components/select-box/SelectBox';

import clsx from 'clsx';

export type AppointmentModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AppointmentModal = (props: AppointmentModalProps) => {
  const { isOpen, setIsOpen } = props;

  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  4;

  const [location, setLocation] = useState<string>('');

  const handleClose = () => {
    setIsOpen((prev) => !prev);
    setYear('');
    setMonth('');
    setDay('');
    setLocation('');
  };

  const disabledBtn = () => {
    return !(
      year &&
      month &&
      day &&
      location.length >= 2 &&
      location.length <= 20
    );
  };

  const handleSubmit = () => {};

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="w-full max-w-[680px] h-auto"
    >
      <Modal.Close onClick={handleClose} />
      <Modal.Title className="!text-black">약속 잡기</Modal.Title>
      <Modal.Description className="flex flex-col gap-5">
        <div className="">
          <span className="pl-5 text-gray-11 text-h3 flex">만남 일시</span>

          <div className="flex gap-[6px] mt-1">
            <SelectBox
              initText="년"
              items={AppointmentYearItems}
              size="md"
              setParams={setYear}
            />
            <SelectBox
              initText="월"
              items={monthItems}
              size="md"
              setParams={setMonth}
            />
            <SelectBox
              initText="일"
              items={dayItems}
              size="md"
              setParams={setDay}
            />
          </div>
        </div>
        <div className="">
          <span className="pl-5 text-gray-11 text-h3 flex">만남 장소</span>

          <div className="mt-1 w-full">
            <Input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              size="lg"
              value={location}
              placeholder="약속 장소를 입력해주세요."
              shape="square"
              className="!text-gray-10 !text-h4"
            />
            <span
              className={clsx(
                'flex pl-7 mt-[10px] text-h5',
                location.length === 0
                  ? 'text-gray-08'
                  : location.length < 2 || location.length > 20
                    ? 'text-error-main'
                    : 'text-gray-08',
              )}
            >
              2자 이상 20자 이하로 입력해주세요.
            </span>
          </div>
        </div>
      </Modal.Description>
      <Modal.Footer className="flex gap-5 mt-[10px]">
        <Button color="gray" shape="rounded" size="md" onClick={handleClose}>
          취소
        </Button>
        <Button
          color={disabledBtn() ? 'disabled' : 'default'}
          shape="rounded"
          size="md"
          onClick={handleSubmit}
          disabled={disabledBtn()}
          type="submit"
        >
          등록
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
