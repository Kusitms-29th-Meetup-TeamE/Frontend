'use client';

import { useState } from 'react';

import FirstForm from '@/containers/signup/FirstForm';
import SecondForm from '@/containers/signup/SecondForm';

export default function SignUp() {
  const [step, setStep] = useState<number>(0);
  return (
    <main className="">
      <FirstForm />
      <SecondForm />
      <div>
        <button>이전</button>
        <button>다음</button>
      </div>
    </main>
  );
}
