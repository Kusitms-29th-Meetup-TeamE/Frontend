'use client';

import { useGlobalModal } from '@/components/common-components/global-modal';
import Skeleton from '@/components/common-components/skeleton';

export default function TestPage() {
  const isTempLoading = true; // tanstack-query 데이터 패칭 시 가져올 isLoading

  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const handleSuccessModal = () => {
    setSuccessModal({
      open: true,
      text: 'test success modal',
    });
  };

  const handleErrorModal = () => {
    setErrorModal({
      open: true,
      text: 'test success modal',
    });
  };

  return (
    <>
      {/* isLoading 관련 예시 코드 */}
      <h3>This is Skeleton component.</h3>
      <div className="flex">
        {isTempLoading ? (
          <div className="flex flex-col ">
            <Skeleton width={500} height={30} />
            <Skeleton width={500} height={30} borderRadius={5} />
            <Skeleton width={500} height={30} borderRadius={10} />
            <Skeleton width={500} height={30} borderRadius={30} />
          </div>
        ) : (
          <div>complete!</div>
        )}
      </div>

      {/* modal component 예시 코드 */}
      <h3>Modal Component</h3>
      <div className="flex gap-3">
        <button onClick={handleSuccessModal}>success 모달 열기</button>
        <button onClick={handleErrorModal}>error 모달 열기</button>
      </div>
    </>
  );
}
