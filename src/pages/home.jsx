import React from "react";
import { Link } from "react-router-dom";

const MentalHealthAI = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-[Manrope,Noto Sans,sans-serif]">
      <div className="flex h-full flex-col">
        <header className="flex items-center justify-between border-b border-[#e7eef4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0d151c]">
            <div className="w-4 h-4">
                {/* add logo here */}
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Sentimi</h2>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/chatbot" className="text-sm font-semibold text-[#2c90e2] hover:underline">Chatbot</Link>
            <Link to="signup" className="h-10 px-4 rounded-xl bg-[#2094f3] text-white text-sm font-bold flex items-center justify-center">Get Started</Link>
            <Link to="login" className="h-10 px-4 rounded-xl bg-[#e7eef4] text-[#0d151c] text-sm font-bold flex items-center justify-center">Log in</Link>
          </div>
        </header>

        <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-full max-w-[960px]">
            <div className="p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 md:px-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://cdn.usegalileo.ai/sdxl10/73e60ab1-602d-42b3-a0bb-66c1efccd048.png')",
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    Talk to Mental Health AI
                  </h1>
                  <h2 className="text-white text-sm md:text-base font-normal">
                    Get instant, anonymous support. Anytime, anywhere.
                  </h2>
                </div>
                <button className="h-12 px-6 rounded-xl bg-[#2094f3] text-white text-base font-bold mt-4">
                  Get Started
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#0d151c] text-[32px] md:text-4xl font-bold max-w-[720px]">
                  Why use Mental Health AI?
                </h1>
                <p className="text-[#0d151c] text-base font-normal max-w-[720px]">
                  Mental Health AI is an AI-powered mental health assistant. It uses natural language processing and machine learning to understand and respond to your messages. Mental Health AI is not a therapist, but it can provide support and guidance on a wide range of mental health topics.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                <div className="flex flex-col gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4">
                  <div className="text-[#0d151c]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z" />
                    </svg>
                  </div>
                  <h2 className="text-base font-bold text-[#0d151c]">Instant support</h2>
                  <p className="text-sm font-normal text-[#49779c]">Get help when you need it</p>
                </div>

                <div className="flex flex-col gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4">
                  <h2 className="text-base font-bold text-[#0d151c]">Always available</h2>
                  <p className="text-sm font-normal text-[#49779c]">Chat with us 24/7, 365 days a year</p>
                </div>

                <div className="flex flex-col gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4">
                  <h2 className="text-base font-bold text-[#0d151c]">Anonymous</h2>
                  <p className="text-sm font-normal text-[#49779c]">No need to share your identity or personal information</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl border border-[#cedde8] bg-slate-50 p-5">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-bold text-[#0d151c]">Already have an account?</p>
                  <p className="text-base font-normal text-[#49779c]">Log in to continue a conversation or access your message history</p>
                </div>
                <button className="h-8 px-4 rounded-xl bg-[#2094f3] text-white text-sm font-medium">Log in</button>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-6 px-4 py-10 md:px-10 md:py-20">
              <div className="text-center">
                <h1 className="text-[32px] md:text-4xl font-bold text-[#0d151c] max-w-[720px] mx-auto">
                  Start feeling better today
                </h1>
              </div>
              <div className="flex justify-center">
                <button className="h-12 px-6 rounded-xl bg-[#2094f3] text-white text-base font-bold">
                  Get Started
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthAI;
