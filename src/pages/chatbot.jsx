import React, { useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import FeatureCard from "../components/FeatureCard";
import HowItWorksStep from "../components/HowItWorksStep";

import headphones from "../assests/headphones.png"
import lock from "../assests/lock.png"
import leaf from "../assests/leaf.png"
import user from "../assests/user.png"
import chatbot from "../assests/chatbot.png"

import { getGeminiResponse } from '../api/gemini';






function Chatbot () {

  const [messages, setMessages] = useState([
    {
      sender: "AI Therapist",
      avatar: chatbot,
      text: "Hello! How may i help u 😄",
    },
  ]);


  
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text) => {
    const userMessage = {
      sender: "You",
      avatar: user,
      text,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessages((prev) => [
      ...prev,
      {
        sender: "AI Therapist",
        avatar: chatbot,
        text: "Typing...",
      },
    ]);

    const reply = await getGeminiResponse(text);

    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        sender: "AI Therapist",
        avatar: chatbot,
        text: reply,
      };
      return updated;
    });

    // Optional: You can also simulate a response
    // setTimeout(() => {
    //   setMessages((prev) => [
    //     ...prev,
    //     {
    //       sender: "AI Therapist",
    //       avatar: chatbot,
    //       text: "Thank you for sharing. I'm here for you.",
    //     },
    //   ]);
    // }, 1000);
  };


  return (

    <div className="bg-gray-50 h-screen text-gray-800 font-sans">
    <Navbar />

    <div className="max-w-7xl mx-auto px-4 py-6 h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-6">
      
      {/* Sidebar */}
      <div className="h-full overflow-y-auto pr-2">
        <h1 className="text-2xl font-bold mb-4">Your Personal AI Therapist</h1>
        <p className="mb-4">Confide in a compassionate, intelligent virtual therapist.</p>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-full font-medium mb-6">Start Talking</button>

        <div className="grid grid-cols-1 gap-7">
          <FeatureCard title="24/7 Support" description="Talk to a virtual therapist anytime, anywhere." image={headphones} />
          <FeatureCard title="Confidential & Secure" description="Your privacy is our top priority." image={lock} />
          <FeatureCard title="Tailored Advice" description="Personalized advice to suit your needs." image={leaf} />

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="space-y-4">
              <HowItWorksStep step="1" title="Describe Your Feelings" />
              <HowItWorksStep step="2" title="Engage in Dialogue" />
              <HowItWorksStep step="3" title="Get Recommendations" />
            </div>
          </div>
        </div>
      </div>

    {/* Chat Area */}
    <div className="bg-white rounded-xl p-6 shadow-md flex flex-col h-full">
      {/* Scrollable Messages Area */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            avatar={msg.avatar}
            text={msg.text}
            isUser={msg.isUser}
          />
        ))}
      </div>

      {/* Sticky Input at Bottom */}
      <div className="pt-4 sticky bottom-0 bg-white">
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>

  </div>
</div>


  )


};

export default Chatbot;
