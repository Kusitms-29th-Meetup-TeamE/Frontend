'use client';

import { useEffect, useRef, useState } from 'react';

import Button from '@/components/common-components/button';
import Input from '@/components/common-components/input';

import { AppointmentMsgItem } from '@/components/chat/AppointmentMsgItem';
import { MyAppointmentMsgItem } from '@/components/chat/MyAppointmentMsgItem';
import { MyMsgItem } from '@/components/chat/MyMsgItem';
import { OtherMsgItem } from '@/components/chat/OtherMsgItem';

import { MsgLogProps } from '@/types/chat';

import { useChatStore } from '@/store/chatStore';
import { Client, CompatClient, Stomp } from '@stomp/stompjs';

import Image from 'next/image';
import SockJS from 'sockjs-client';

export const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL;

export const ChatRoom = () => {
  // const { myId } = useChatStore();
  const myId = 5;
  const [value, setValue] = useState<string>('');

  // scrollToBottom을 위한 ref
  const msgBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (msgBoxRef.current) {
      msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
    }
  };

  const disabledBtn = () => value.length === 0;

  // socket 관련 로직 설계 시작
  const [stompClient, setStompClient] = useState<CompatClient | null>(null);
  const chatroomId = 10;

  const connectToWebSocket = () => {
    const socket = new SockJS(`${SOCKET_URL}`);
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      {},
      () => console.log('connection success'),
      () => console.log('connection failed'),
    );

    stompClient.onConnect = () => {
      stompClient.subscribe(`/topic/chatting/${chatroomId}`, callback);
    };

    setStompClient(stompClient);

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  };

  useEffect(connectToWebSocket, []);

  // TODO: 타입 수정하기 any (x)
  const [logData, setLogData] = useState<any[]>([]);
  const [chatList, setChatList] = useState<any[]>([]); // 채팅 기록

  const callback = (message: any) => {
    if (message.body) {
      const msg = JSON.parse(message.body);
      if (msg.chatMessageLog) {
        console.log('msg.chatMessageLog', msg.chatMessageLog);
        setLogData(msg.chatMessageLog);
      }
      setChatList((chats) => [...chats, msg]);
    }
  };

  // console.log('logdata', logData);

  const sendChat = () => {
    if (value === '') return;

    const messageObject = {
      senderId: 5,
      text: value,
    };

    stompClient?.send(
      `/app/chatting/${chatroomId}/text`,
      {},
      JSON.stringify(messageObject),
    );
    setValue('');
  };

  // console.log('chatlist', chatList);

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  const renderMessageItem = (item: MsgLogProps, idx: number) => {
    switch (item.type) {
      case 'TEXT':
        return (
          <div
            key={idx}
            className={`inline-flex ${item.senderId === myId ? 'justify-end' : ''}`}
          >
            {item.senderId === myId ? (
              <MyMsgItem data={item} />
            ) : (
              <OtherMsgItem data={item} />
            )}
          </div>
        );
      case 'APPOINTMENT':
        return (
          <div
            key={idx}
            className={`inline-flex ${item.senderId === myId ? 'justify-end' : ''}`}
          >
            {item.senderId === myId ? (
              <MyAppointmentMsgItem data={item as MsgLogProps} />
            ) : (
              <AppointmentMsgItem data={item as MsgLogProps} />
            )}
          </div>
        );
      case 'EMOTICON':
        return (
          <div key={idx} className="inline-flex">
            <span className="bg-yellow-300 py-2 px-5 rounded-lg">
              {item.emoticon && item.emoticon === '안녕' ? '😃' : '😃'}
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col ml-[5px] rounded-[20px] border border-gray-04 w-full max-w-[690px] h-[940px]">
      <div className="border-b border-b-gray-04 flex justify-between items-center max-h-[118px] px-[30px] py-[22px]">
        <div className="flex gap-5 items-center">
          <Image
            src={'/assets/main/how3.png'}
            width={76}
            height={76}
            alt=""
            className="object-cover w-[76px] h-[76px] rounded-[10px]"
          />
          <p className="text-black text-body1">서울 근교 등산 동호회</p>
        </div>
        <button>약속 잡기</button>
      </div>

      <div
        ref={msgBoxRef}
        className="flex-1 p-[30px] overflow-y-auto gray-scroll-container"
      >
        <div className="flex flex-col gap-[10px]">
          {logData?.map((item, idx) => renderMessageItem(item, idx))}
          {chatList?.map(
            (item: any, idx: number) =>
              idx !== 0 && renderMessageItem(item, idx),
          )}
        </div>
      </div>

      <div className="flex gap-4 h-[94px] px-[30px] py-[18px]">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="lg"
          placeholder="메시지를 입력하세요."
          shape="square"
          type="text"
          className="!bg-gray-02 border-gray-04"
          onKeyDown={(ev) => {
            if (ev.keyCode === 13) {
              sendChat();
            }
          }}
        />
        <Button
          size="sm"
          shape="square"
          color={disabledBtn() ? 'disabled' : 'default'}
          disabled={disabledBtn()}
          onClick={() => sendChat()}
        >
          전송
        </Button>
      </div>
    </div>
  );
};
