import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f8fafb] overflow-x-hidden font-[Manrope,Noto Sans,sans-serif]"
      style={{
        "--checkbox-tick-svg":
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(248,250,251)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
      }}
    >
      <div className="layout-container flex flex-col grow">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#e8eef3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e151b]">
            <div className="size-4">
              {/* log here */}
            </div>
            <Link to='/' className="text-lg font-bold tracking-tight">Sentimi</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/chatbot" className="text-sm font-semibold text-[#2c90e2] hover:underline">
              Chatbot
            </Link>
            <Link to='/signup' className="h-10 px-5 rounded-full bg-[#2c90e2] text-white text-sm font-bold flex items-center justify-center">
              Sign up
            </Link>
          </div>
        </header>

        {/* Login Section */}
        <div className="flex flex-1 justify-center px-4 md:px-40 py-8">
          <div className="w-full max-w-[512px]">
            <h1 className="text-[22px] font-bold tracking-tight text-[#0e151b] px-4 pb-3 pt-5">
              Welcome Back
            </h1>
            <p className="text-[#0e151b] text-base px-4">
              Log in to your MindEase account to continue your personalized mental health journey. Your privacy is protected.
            </p>

            {/* Email */}
            <div className="px-4 py-3">
              <label className="block">
                <p className="text-[#0e151b] text-base font-medium pb-2">Email</p>
                <input
                  type="email"
                  className="w-full h-14 rounded-xl border border-[#d1dce6] bg-[#f8fafb] p-[15px] text-base text-[#0e151b] placeholder:text-[#507695] focus:outline-none"
                  placeholder="Enter your email"
                />
              </label>
            </div>

            {/* Password */}
            <div className="px-4 py-3">
              <label className="block">
                <p className="text-[#0e151b] text-base font-medium pb-2">Password</p>
                <input
                  type="password"
                  className="w-full h-14 rounded-xl border border-[#d1dce6] bg-[#f8fafb] p-[15px] text-base text-[#0e151b] placeholder:text-[#507695] focus:outline-none"
                  placeholder="Password"
                />
              </label>
            </div>

            {/* Remember Me */}
            <div className="px-4 py-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-2 border-[#d1dce6] text-[#2c90e2] checked:bg-[#2c90e2] focus:ring-0"
                />
                <span className="text-[#0e151b] text-base">Remember this account</span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-3 px-4 py-3">
              <button className="w-full h-12 rounded-full bg-[#2c90e2] text-white text-base font-bold">
                Log In
              </button>
              <button className="w-full h-12 rounded-full bg-[#e8eef3] text-[#0e151b] text-base font-bold">
                Log In with Google
              </button>
            </div>

            <p className="text-[#507695] text-sm text-center px-4 pb-3">
              If you encounter login issues, visit our help center. Please contact MindEase Support for questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
