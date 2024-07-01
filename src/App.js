import React from 'react';
import ChatHeader from './components/ChatHeader';
import ChatWindow from './components/ChatWindow';
import ChatFooter from './components/ChatFooter';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <ChatHeader />
      <ChatWindow />
      <ChatFooter />
    </div>
  );
};

export default App;