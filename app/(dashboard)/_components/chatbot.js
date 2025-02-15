
"use client";

import Script from 'next/script';

const Chatbot = () => {

  return (
    <>
      <Script 
        src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
        strategy="afterInteractive"
      />
      
      <df-messenger
        project-id="certain-math-447716-d1"
        agent-id="a118bf38-231f-40b0-b217-89527312914d"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="CodeRelay_3.0"></df-messenger-chat-bubble>
        <df-messenger-expand-button></df-messenger-expand-button>
      </df-messenger>
      
      <style jsx global>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          bottom: 16px;
          right: 16px;
          --df-messenger-chat-window-width: 800px;
          --df-messenger-chat-window-height: 600px;
          --df-messenger-chat-window-position: fixed;
        }

        df-messenger-chat {
          width: var(--df-messenger-chat-window-width) !important;
          height: var(--df-messenger-chat-window-height) !important;
          max-width: 90vw !important;
          max-height: 80vh !important;
        }

        df-messenger-messages {
          height: calc(100% - 120px) !important;
        }

        df-messenger-user-input {
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </>
  );
};


export default Chatbot;
