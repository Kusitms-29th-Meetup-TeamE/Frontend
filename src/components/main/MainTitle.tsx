import clsx from 'clsx';
import Image from 'next/image';

export type MainTitleProps = {
  title: string;
  subTitle: string;
  className?: string;
};

export default function MainTitle(props: MainTitleProps) {
  return (
    <div
      className={clsx(
        props.className,
        'flex flex-col gap-[30px] justify-center items-center',
      )}
    >
      <Image src="/assets/pin_icon.svg" alt="pin" width={14} height={14} />
      <div className="text-gray-11 text-h2">{props.title}</div>
      <div className="text-gray-09 text-h4">{props.subTitle}</div>
    </div>
  );
}
