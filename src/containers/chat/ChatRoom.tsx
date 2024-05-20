'use client';

import { useEffect, useRef, useState } from 'react';
import { LuCalendarDays } from 'react-icons/lu';

import Button from '@/components/common-components/button';
import Input from '@/components/common-components/input';

import { AppointmentModal } from '@/components/chat/AppointmentModal';
import { AppointmentMsgItem } from '@/components/chat/AppointmentMsgItem';
import { MyAppointmentMsgItem } from '@/components/chat/MyAppointmentMsgItem';
import { MyMsgItem } from '@/components/chat/MyMsgItem';
import { OtherMsgItem } from '@/components/chat/OtherMsgItem';

import { DirectChatRoom, GroupChatRoom, MsgLogProps } from '@/types/chat';

import { useChatStore } from '@/store/chatStore';
import { CompatClient } from '@stomp/stompjs';

import clsx from 'clsx';
import Image from 'next/image';

export const ChatRoom = (props: {
  roomId: number;
  roomInfo: any;
  stompClient: CompatClient | null;
  isGroup?: boolean;
}) => {
  const { roomId, roomInfo, stompClient, isGroup = true } = props;

  const { myId } = useChatStore();

  const [value, setValue] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [subscription, setSubscription] = useState<any>(null);

  const [logData, setLogData] = useState<any[]>([]);
  const [chatList, setChatList] = useState<any[]>([]);

  const msgBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (msgBoxRef.current) {
      msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
    }
  };

  const disabledBtn = () => value.length === 0;

  useEffect(() => {
    if (stompClient?.connected) {
      if (subscription) {
        subscription.unsubscribe();
      }

      const newSubscription = stompClient.subscribe(
        `/topic/chatting/${roomId}`,
        callback,
      );
      setSubscription(newSubscription);
      console.log('here', stompClient?.connected);
      setChatList([]);
      setLogData([]);
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [roomId, stompClient]);

  const callback = (message: any) => {
    if (message.body) {
      const msg = JSON.parse(message.body);
      if (msg.chatMessageLog) {
        setLogData(msg.chatMessageLog);
      }
      setChatList((chats) => [...chats, msg]);
    }
  };

  const sendChat = (id: number) => {
    if (value === '') return;

    const messageObject = {
      senderId: myId,
      text: value,
    };

    stompClient?.send(
      `/app/chatting/${id}/text`,
      {},
      JSON.stringify(messageObject),
    );
    setValue('');
  };

  const sendEmoticon = (id: number) => {
    const messageObject = {
      senderId: myId,
      emoticon: '안녕',
    };

    stompClient?.send(
      `/app/chatting/${id}/emoticon`,
      {},
      JSON.stringify(messageObject),
    );
  };

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
          <div
            key={idx}
            className={`inline-flex ${item.senderId === myId ? 'justify-end' : ''}`}
          >
            <div>
              {item.senderId !== myId && (
                <div className="flex gap-3 items-center">
                  <Image
                    src={item.senderImageUrl ?? '/assets/main/main_banner.png'}
                    alt=""
                    width={48}
                    height={48}
                    className="object-cover w-[48px] h-[48px] rounded-full"
                  />
                  <span className="text-black text-body2">
                    {item.senderName ?? '또바기'}
                  </span>
                </div>
              )}

              <Image
                src={'/assets/ddoba_emoticon.png'}
                alt=""
                width={200}
                height={200}
                className="object-cover m-3 rounded-[20px]"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleAppointment = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col ml-[5px] rounded-[20px] border border-gray-04 w-full max-w-[690px] h-[940px]">
        <div className="border-b border-b-gray-04 flex justify-between items-center max-h-[118px] px-[30px] py-[22px]">
          <div className="flex gap-5 items-center">
            <Image
              src={roomInfo.imageUrl}
              width={76}
              height={76}
              alt=""
              className="object-cover w-[76px] h-[76px] rounded-[10px]"
            />
            <p className="text-black text-body1">
              {isGroup ? roomInfo.title : roomInfo.opponentName}
            </p>
          </div>
          <button
            onClick={handleAppointment}
            className="flex gap-2 items-center border border-gray-05 text-body3 bg-white rounded-[6px] text-gray-09 py-[5px] px-4 hover:bg-gray-02"
          >
            <LuCalendarDays />
            <span>{isGroup ? '약속 잡기' : '배움 나누기 확정하기'}</span>
          </button>
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
          <button
            onClick={() => sendEmoticon(roomId)}
            className="w-[120px] rounded-full border-2 text-gray-09 text-h3 border-primary-orange6 hover:bg-primary-orange1"
          >
            또바 :D
          </button>
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
                sendChat(roomId);
              }
            }}
          />
          <Button
            size="sm"
            shape="square"
            color={disabledBtn() ? 'disabled' : 'default'}
            disabled={disabledBtn()}
            onClick={() => sendChat(roomId)}
          >
            전송
          </Button>
        </div>
      </div>

      {/* 약속 잡기 모달 */}
      <AppointmentModal
        stompClient={stompClient}
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        roomId={roomId}
      />
    </>
  );
};
