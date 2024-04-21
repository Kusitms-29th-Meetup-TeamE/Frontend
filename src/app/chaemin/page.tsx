import Skeleton from '@/components/common-components/skeleton';

export default function TestPage() {
  const isTempLoading = true; // tanstack-query 데이터 패칭 시 가져올 isLoading

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
    </>
  );
}
