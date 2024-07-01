import React from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow = () => {
  const messages = [
    {
      message: 'Hi team 👋',
      timestamp: '11:31 AM',
      sender: 'You',
      role: '',
      isSender: true,
      avatar: '',
    },
    {
      message: 'Anyone on for lunch today',
      timestamp: '11:31 AM',
      sender: 'You',
      role: '',
      isSender: true,
      avatar: '',
    },
    {
      message: "I'm down! Any ideas??",
      timestamp: '11:35 AM',
      sender: 'Jav',
      role: 'Engineering',
      isSender: false,
      avatar: './avatar1-sm.jpg',
    },
    {
      message: 'I am down for whatever!',
      timestamp: '11:36 AM',
      sender: 'You',
      role: '',
      isSender: true,
      avatar: '',
    },
    {
      message: 'I was thinking the cafe downtown',
      timestamp: '11:45 AM',
      sender: 'Aubrey',
      role: 'Product',
      isSender: false,
      avatar: './avatar3-sm.jpg',
    },
    {
      message: 'But limited vegan options @Janet!',
      timestamp: '11:46 AM',
      sender: 'Aubrey',
      role: 'Product',
      isSender: false,
      avatar: './avatar5-sm.jpg',
    },
    {
      message: 'Agreed',
      timestamp: '11:52 PM',
      sender: 'You',
      role: '',
      isSender: true,
      avatar: '',
    },
    {
      message: 'That works- I was actually planning to get a smoothie anyways 👍',
      timestamp: '12:03 PM',
      sender: 'Janet',
      role: 'Engineering',
      isSender: false,
      avatar: './avatar6-sm.jpg',
    },
    {
      message: 'On for 12:30 PM then?',
      timestamp: '12:04 PM',
      sender: 'Janet',
      role: 'Product',
      isSender: false,
      avatar: './avatar1-sm.jpg',
    },
  ];

  return (
    <div className="flex-grow p-4 overflow-y-auto">
      <div className="text-center text-gray-500 mb-4">8/20/2020</div>
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          message={msg.message}
          timestamp={msg.timestamp}
          sender={msg.sender}
          role={msg.role}
          isSender={msg.isSender}
          avatar={msg.avatar}
        />
      ))}
    </div>
  );
};

export default ChatWindow;