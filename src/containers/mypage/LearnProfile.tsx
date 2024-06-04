'use client';

import { useEffect, useMemo, useState } from 'react';

import Button from '@/components/common-components/button';
import Input from '@/components/common-components/input';

import MyExperienceItem from '@/components/mypage/MyExperienceItem';
import SearchAddressModal from '@/components/signup/SearchAddressModal';

import { dayItems, monthItems, yearItems } from '@/constants/object';
import {
  useGetLearnProfile,
  useGetMyPageInfo,
  usePostLearnProfile,
} from '@/hooks/api/useMyPage';
import { LearnProfileProps } from '@/types/mypage';

import clsx from 'clsx';
import Image from 'next/image';

const formStyle = {
  label: 'pl-5 mb-[10px] text-h3 text-black',
  inputBtn:
    'absolute right-7 top-[45px] px-[10px] py-[9px] bg-primary-orange1 text-primary-orange6 cursor-pointer rounded-[6px] items-center flex justify-center h-[30px] w-full max-w-[90px]',
};

export default function LearnProfile() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [img, setImg] = useState<string>('');

  const [year, setYear] = useState<string | number>('');
  const [month, setMonth] = useState<string | number>('');
  const [day, setDay] = useState<string | number>('');

  const [location, setLocation] = useState<string>('');
  const [statusMsg, setStatusMsg] = useState<string>('');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: userData } = useGetMyPageInfo();

  const { data, isLoading, error } = useGetLearnProfile();

  const [exDataList, setExDataList] = useState<LearnProfileProps[]>([]);

  useEffect(() => {
    if (data) {
      setName(data.name);
      setAge(data.age);
      setImg(userData.imageUrl);
      setLocation(data.location);
      setStatusMsg(data.introduce);
      setExDataList(data.experiences ?? []);
    }
  }, [data]);

  const handleAddExperience = () => {
    const newExperience = {
      id: exDataList.length + 1,
      title: '',
      description: '',
      experienceType: '분야',
    };
    setExDataList((prevList) => [...prevList, newExperience]);
  };

  const [profileData, setProfileData] = useState<any>([]);
  const { mutate } = usePostLearnProfile(profileData);

  useEffect(() => {
    setProfileData({
      ...profileData,
      introduce: statusMsg,
    });
  }, [statusMsg]);

  const handleSubmit = () => {
    mutate();
    // console.log('profiledata', profileData);
  };

  return (
    <>
      <div className="w-full max-w-[588px] flex flex-col">
        <div className="flex flex-col gap-[30px] py-5 px-6 rounded-[20px] bg-gray-02">
          <div>
            <label className={formStyle.label}>사진 등록하기</label>
            <Image
              //   TODO: 플러스 아이콘 넣기
              // src={'/assets/main/main_banner.png'}
              src={img ?? '/assets/ddoba_profile.png'}
              alt=""
              width={150}
              height={150}
              className="rounded-full object-cover w-[150px] h-[150px] border border-gray-04"
            />
          </div>
          <div>
            <label className={formStyle.label}>이름</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="lg"
              placeholder=""
              shape="square"
              className="h-[60px]"
            />
          </div>
          <div>
            <label className={formStyle.label}>나이</label>
            <Input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              size="lg"
              placeholder=""
              shape="square"
              className="h-[60px]"
            />
          </div>

          <div className="relative">
            <label className={formStyle.label}>활동 지역</label>
            <Input
              onChange={() => {
                // console.log(emailInputRef.current?.value);
              }}
              size="lg"
              value={location}
              placeholder="오른쪽 버튼을 눌러 주소를 검색해보세요."
              shape="square"
              className="h-[60px]"
            />
            <span
              onClick={() => setIsOpen(true)}
              className={clsx(formStyle.inputBtn)}
            >
              주소 검색
            </span>
          </div>
          <div>
            <label className={formStyle.label}>한마디</label>
            <Input
              maxLength={100}
              value={statusMsg}
              onChange={(e) => setStatusMsg(e.target.value)}
              size="lg"
              placeholder="나의 마음가짐을 자유롭게 적어주세요! (100자 이내)"
              shape="square"
              className="h-[60px]"
            />
          </div>
          <div>
            <label className={formStyle.label}>나의 배움 목록</label>
            <span className="text-body3 text-error-main">
              * 배움 목록은 하나씩 추가해주세요.
            </span>

            <div className="flex flex-col gap-[10px]">
              {exDataList.map((item, idx) => {
                return (
                  <div key={idx}>
                    <MyExperienceItem
                      profileData={profileData}
                      setProfileData={setProfileData}
                      data={item}
                    />
                  </div>
                );
              })}
              <button
                onClick={handleAddExperience}
                className="bg-white border border-gray-04 w-full rounded-[20px] h-[60px]"
              >
                + 나의 배움 목록 추가
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[80px]">
          <Button
            onClick={handleSubmit}
            size="lg"
            color="default"
            className="flex"
          >
            변경사항 저장
          </Button>
        </div>
      </div>

      {/* 주소 검색 모달 */}
      <SearchAddressModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setLocation={setLocation}
      />
    </>
  );
}
