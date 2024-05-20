'use client';

import { useRef, useState } from 'react';

import Button from '@/components/common-components/button';
import Checkbox from '@/components/common-components/check-box/Checkbox';
import Textarea from '@/components/common-components/textarea';

import MyLearnListItem from '@/components/mypage/MyLearnListItem';
import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';

import { useMyReviews, usePostMyReview } from '@/hooks/api/useMyPage';

import { useParams, useRouter } from 'next/navigation';

const variants = {
  checkboxContainer: 'flex flex-row gap-[10px] ml-7 cursor-pointer',
  checkboxLabel: 'text-body3 text-gray-07 cursor-pointer',
};

export default function MyLearnReviewsDetailPage() {
  const params = useParams();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const [isCheckedYes, setIsCheckedYes] = useState<boolean>(true);
  const [isCheckedNo, setIsCheckedNo] = useState<boolean>(false);

  const { data } = useMyReviews(Number(params.reviewId));

  const [content, setContent] = useState<string>('');
  const { mutate } = usePostMyReview(content, Number(params.reviewId));

  const handleYesClick = () => {
    setIsCheckedYes(true);
    setIsCheckedNo(false);
  };

  const handleNoClick = () => {
    setIsCheckedYes(false);
    setIsCheckedNo(true);
  };

  const handleSubmit = () => {
    mutate();
    router.back();
  };

  return (
    <div className="w-full m-auto max-w-[1200px] border border-black">
      <Sidebar />
      <div className="mt-[60px] flex flex-col gap-[30px] ml-[282px] pl-6 border border-blue-500">
        <MyPageTitle
          title="후기 보내기"
          content="배움 나누기 활동에 대한 후기를 작성해보세요"
        />
        {data && <MyLearnListItem data={data} />}

        <div className="my-[30px] border border-black">
          <p className="text-footer-bold">
            <span className="text-primary-orange6">'{data?.title}'</span> 배움에
            대한 후기
          </p>
          <Textarea
            placeholder="배움 후기를 적어주세요. (10자 이상 300자 이내)"
            size="md"
            ref={textareaRef}
            onChange={() => {
              console.log(textareaRef.current?.value);
              setContent(textareaRef.current?.value as string);
              if (textareaRef.current?.value) setIsDisabled(false);
              else setIsDisabled(true);
            }}
            className="!h-[250px] mt-[30px]"
          />
        </div>

        <div className="border border-blue-500">
          <div className="flex gap-[30px]">
            <span className="text-black text-h3">익명으로 작성할까요?</span>
            <div className="flex gap-5 items-center">
              <div
                className={variants.checkboxContainer}
                onClick={handleYesClick}
              >
                <Checkbox width={19} height={19} isChecked={isCheckedYes} />
                <label className={variants.checkboxLabel}>네</label>
              </div>

              <div
                className={variants.checkboxContainer}
                onClick={handleNoClick}
              >
                <Checkbox width={19} height={19} isChecked={isCheckedNo} />
                <label className={variants.checkboxLabel}>아니오</label>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-[80px]">
            <Button
              size="lg"
              color={isDisabled ? 'disabled' : 'default'}
              disabled={isDisabled}
              onClick={handleSubmit}
            >
              후기 등록
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
