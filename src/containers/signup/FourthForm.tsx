import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineLock } from 'react-icons/md';

import Input from '@/components/common-components/input';

import SignUpTitle from '@/components/signup/SignUpTitle';

import { UserInfoProps } from '@/types/user';

import { zodResolver } from '@hookform/resolvers/zod';

import Image from 'next/image';
import { z } from 'zod';

const schema = z
  .object({
    name: z.string().min(2, { message: '이름은 2글자 이상이어야 합니다.' }),
    password: z
      .string()
      .min(8, { message: '비밀번호는 8자 이상 20자 이하이어야 합니다.' })
      .regex(/^(?=.*d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/, {
        message: '비밀번호는 영문, 숫자를 포함해야 합니다.',
      }),
    confirmPassword: z
      .string()
      .min(8, { message: '비밀번호는 8자 이상 20자 이하이어야 합니다.' })
      .regex(/^(?=.*d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/, {
        message: '비밀번호는 영문, 숫자를 포함해야 합니다.',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });
type Schema = z.infer<typeof schema>;

export type FourthFormProps = {
  // onSubmit: (data: any) => void;
  setCheckForm: Dispatch<SetStateAction<boolean>>;
  setUserInfo: Dispatch<SetStateAction<UserInfoProps>>;
  userInfo: UserInfoProps;
};

export default function FourthForm(props: FourthFormProps) {
  const { setCheckForm, setUserInfo, userInfo } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setValue,
    watch,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: userInfo.name,
      password: userInfo.password,
      confirmPassword: userInfo.confirmPassword,
    },
  });

  // setCheckForm(!isValid);

  useEffect(() => {
    setCheckForm(!isValid);
  }, [isValid, setCheckForm]);

  // useEffect(() => {
  //   setUserInfo((prev) => ({
  //     ...prev,
  //     name: getValues('name'),
  //     password: getValues('password'),
  //     confirmPassword: getValues('confirmPassword'),
  //   }));
  // }, [getValues, setUserInfo]);

  // useEffect(() => {
  //   const subscirbe = watch((data, { name }) => console.log(data, name));
  //   return () => subscirbe.unsubscribe();
  // }, [watch]);

  useEffect(() => {
    const subscription = watch((value: any) => {
      setUserInfo((prev) => ({
        ...prev,
        name: value.name,
        password: value.password,
        confirmPassword: value.confirmPassword,
      }));
    });
    return () => subscription.unsubscribe();
  }, [watch, setUserInfo]);

  // setValue('name', getValues('name'));
  // setValue('password', getValues('password'));
  // setValue('confirmPassword', getValues('confirmPassword'));

  // useEffect(() => {
  //   if (isValid) {
  //     setUserInfo((prev) => ({
  //       ...prev,
  //       name: getValues('name'),
  //       password: getValues('password'),
  //       confirmPassword: getValues('confirmPassword'),
  //     }));
  //   }
  // }, [isValid]);

  const onSubmitForm = (data: Schema) => {
    // onSubmit(data);
    // console.log('onSubmitForm함수 실행됨');
  };

  const [nameNotiVisible, setNameNotiVisible] = useState(true);
  const [pwdNotiVisible, setPwdNotiVisible] = useState(true);

  return (
    <div className="m-auto w-full max-w-[800px] flex flex-col justify-center items-center">
      <Image
        src={'/assets/signup/form4.png'}
        width={618}
        height={42}
        alt=""
        className="mb-[96px]"
      />

      <SignUpTitle title={'회원가입'} subTitle={'가입 정보를 입력해주세요.'} />

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="mt-[40px] flex flex-col justify-center gap-5 w-full max-w-[588px]"
      >
        <div className="flex flex-col">
          <span className="pl-5 text-gray-11 text-h3">이름</span>
          <Input
            startIcon={<BsPerson />}
            size="lg"
            placeholder="이름을 입력해주세요."
            shape="square"
            onFocus={(e) => setNameNotiVisible(false)}
            {...register('name')}
          />
          <span className="pl-7 my-2 text-h5 h-[28px] flex">
            {nameNotiVisible ? (
              <span className="text-gray-08">2글자 이상으로 입력해주세요.</span>
            ) : errors.name ? (
              <span className="text-error-main">{errors.name.message}</span>
            ) : (
              <span className="text-gray-08"></span>
            )}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="pl-5 text-gray-11 text-h3">비밀번호</span>
          <Input
            startIcon={<MdOutlineLock />}
            size="lg"
            // defaultValue={pwd}
            placeholder="비밀번호를 입력해주세요."
            shape="square"
            type="password"
            onFocus={(e) => setPwdNotiVisible(false)}
            {...register('password')}
          />

          <span className="pl-7 my-2 text-h5 h-[28px] flex">
            {pwdNotiVisible ? (
              <span className="text-gray-08">
                8자 이상 20자 이하의 영문, 숫자를 포함하여 입력해주세요.
              </span>
            ) : errors.password ? (
              <span className="text-error-main">{errors.password.message}</span>
            ) : (
              <span className="text-gray-08"></span>
            )}
          </span>
        </div>

        <div className="">
          <span className="pl-5 text-gray-11 text-h3">비밀번호 확인</span>
          <Input
            startIcon={<MdOutlineLock />}
            size="lg"
            // defaultValue={confirmPwd}
            placeholder="위에 기재한 비밀번화와 동일하게 입력해주세요."
            shape="square"
            type="password"
            {...register('confirmPassword')}
          />
          <span className="pl-7 my-2 text-h5 h-[28px] flex">
            {errors.confirmPassword ? (
              <span className="text-error-main">
                {errors.confirmPassword.message}
              </span>
            ) : (
              <span className="text-gray-08" />
            )}
          </span>
        </div>
      </form>
    </div>
  );
}
