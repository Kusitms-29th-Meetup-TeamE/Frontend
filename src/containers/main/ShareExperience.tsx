'use client';

import { useMemo } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import MainTitle from '@/components/main/MainTitle';
import ShareProfile, {
  ShareProfileProps,
} from '@/components/main/ShareProfile';

import { useMainDataList } from '@/hooks/api/useMain';
import { useNotifyLogin } from '@/hooks/useToast';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ShareExperience() {
  const router = useRouter();
  const accessToken =
    typeof window !== 'undefined' && sessionStorage.getItem('accessToken');

  const { data: mainData, isLoading, error } = useMainDataList();

  const mainProfileList: ShareProfileProps[] = useMemo(
    () => mainData?.experiences ?? [],
    [mainData],
  );

  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <MainTitle
        title="또바 추천 배움 나누기"
        subTitle="우리 동네 배움 선생님을 추천해드려요."
        className="mb-[50px]"
      />

      <div className="flex gap-4">
        {mainProfileList.slice(0, 4).map((item, idx) => {
          return (
            <div key={idx} className="w-full">
              <ShareProfile
                isLoading={isLoading}
                name={item.name}
                age={item.age}
                gender={item.gender}
                message={item.message}
                location={item.location}
                imageUrl={item.imageUrl}
                type={item.type}
                className="bg-white transition-transform duration-300 ease-in-out transform-gpu hover:rounded-[20px] hover:p-[6px] hover:bg-white hover:shadow-[0_4px_30px_20px_rgba(0,0,0,0.08)]"
              />
            </div>
          );
        })}
      </div>

      <div
        onClick={() => {
          if (accessToken) router.push('/share');
          else useNotifyLogin();
        }}
        className="mt-[70px] w-full mx-auto max-w-[1200px] text-center text-body3 text-gray-10"
      >
        <div className="inline-flex items-center gap-[2px] cursor-pointer px-3 py-1 rounded-lg hover:bg-gray-02">
          더 많은 활동 보기
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}
