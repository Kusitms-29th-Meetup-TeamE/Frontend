'use client';

import toast from 'react-hot-toast';

import {
  useNotifyError,
  useNotifySuccess,
  useNotifyToast,
} from '@/hooks/useToast';

export default function Temp() {
  return (
    <div className="flex gap-2">
      <button
        className="border p-2 rounded-md"
        onClick={() => useNotifySuccess('login success')}
      >
        button1
      </button>
      <button
        className="border p-2 rounded-md"
        onClick={() => useNotifyToast({ text: 'helloworld', icon: '😈' })}
      >
        button2
      </button>
      <button
        className="border p-2 rounded-md"
        onClick={() => useNotifyError('unexpected error')}
      >
        button3
      </button>
    </div>
  );
}
