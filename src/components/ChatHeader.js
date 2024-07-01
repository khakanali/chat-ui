import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const ChatHeader = () => {
  const avatars = [
    './avatar1-sm.jpg',
    './avatar3-sm.jpg',
    './avatar5-sm.jpg',
    './avatar6-sm.jpg',
  ];

  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center border-b border-gray-300">
      <div className="flex items-center">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            className="w-10 h-10 rounded-full border-2 border-white -ml-2"
            style={{ zIndex: index }}
          />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold flex items-center">
          <span role="img" aria-label="unicorn">
            🦄
          </span>
          Team Unicorns
        </h1>
        <span className="text-sm text-gray-600">last seen 45 minutes ago</span>
      </div>
      <button className="text-gray-600">
        <FontAwesomeIcon icon={faEllipsisH} size="lg" />
      </button>
    </div>
  );
};

export default ChatHeader;