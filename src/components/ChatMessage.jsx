function ChatMessage({ sender, avatar, text, isUser }) {
    return (
      <div className={`flex ${isUser ? 'justify-start' : 'justify-end'}`}>
        {isUser && <img src={avatar} alt={sender} className="w-8 h-8 rounded-full mr-2" />}
        <div className={`max-w-md px-4 py-2 rounded-lg shadow text-sm ${isUser ? 'bg-gray-100 text-black' : 'bg-blue-500 text-white'}`}>
          <div className="whitespace-pre-line">{text}</div>
        </div>
        {!isUser && <img src={avatar} alt={sender} className="w-8 h-8 rounded-full ml-2" />}
      </div>
    );
}

export default ChatMessage;