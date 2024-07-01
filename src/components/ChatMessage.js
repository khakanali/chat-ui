import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const ChatMessage = ({ message, timestamp, sender, role, isSender, avatar }) => {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isSender && (
        <img
          src={avatar}
          alt={sender}
          className="w-10 h-10 rounded-full mr-2"
        />
      )}
      <div
        className={`max-w-md p-4 rounded-lg ${
          isSender ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {!isSender && (
          <div className="mb-2">
            <span className="font-bold">{sender}</span>{' '}
            <span className="text-sm text-gray-600">{role}</span>
          </div>
        )}
        <p>{message}</p>
        <div
          className={`text-right text-sm mt-2 ${
            isSender ? 'text-white' : 'text-gray-600'
          }`}
        >
          {timestamp} {isSender && <FontAwesomeIcon icon={faCheckDouble} />}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;