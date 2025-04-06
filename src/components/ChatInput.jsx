import React, { useState } from "react";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;

    onSend(message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="mt-4 flex items-center border rounded-lg p-2 bg-gray-100">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 bg-gray-100 outline-none px-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={handleSend}
      >
        ➤
      </button>
    </div>
  );
}

export default ChatInput;
