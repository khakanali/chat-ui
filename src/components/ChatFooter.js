import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPaperPlane, faAt } from '@fortawesome/free-solid-svg-icons';

const ChatFooter = () => {
  return (
    <div className="bg-gray-100 p-4 flex items-center space-x-4">
      <FontAwesomeIcon icon={faSmile} className="text-gray-500 text-2xl" />
      <input
        className="flex-grow p-2 border border-gray-300 rounded-lg bg-white text-gray-700"
        type="text"
        placeholder="Start typing..."
      />
      <FontAwesomeIcon icon={faAt} className="text-gray-500 text-2xl" />
      <FontAwesomeIcon icon={faPaperPlane} className="text-gray-500 text-2xl" />
    </div>
  );
};

export default ChatFooter;