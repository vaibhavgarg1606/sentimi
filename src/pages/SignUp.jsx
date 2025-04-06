import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("therapy");

  return (
    <div className="min-h-screen bg-[#f7fdfc]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#e8eef3] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0e151b]">
          <div className="size-4">
            {/* logo here */}
          </div>
          <Link to="/" className="text-lg font-bold tracking-tight">Sentimi</Link>
        </div>
        <div className="flex items-center gap-4">
            <p>Already Have an Account?</p>
            <Link to="/login" className="h-10 px-4 rounded-xl bg-[#2094f3] text-white text-sm font-bold flex items-center justify-center">
                Login
            </Link>
        </div>
      </header>

      {/* Signup Form */}
      <div className="flex justify-center items-center px-4 py-12">
        <div className="w-full max-w-2xl bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Create an account</h2>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Create password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* What are you looking for? */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">What are you looking for?</label>
              <div className="space-y-2">
                <label className="flex items-center p-3 border rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="therapy"
                    checked={selectedOption === "therapy"}
                    onChange={() => setSelectedOption("therapy")}
                    className="mr-3"
                  />
                  I’m looking for therapy
                </label>
                <label className="flex items-center p-3 border rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="medication"
                    checked={selectedOption === "medication"}
                    onChange={() => setSelectedOption("medication")}
                    className="mr-3"
                  />
                  I’m looking for a prescription for medication
                </label>
                <label className="flex items-center p-3 border rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="unsure"
                    checked={selectedOption === "unsure"}
                    onChange={() => setSelectedOption("unsure")}
                    className="mr-3"
                  />
                  I’m not sure yet
                </label>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">Is there anything else we should know?</label>
              <p className="text-sm text-gray-600 mb-2">
                Help us match you with the right therapist by telling us more about what you’re looking for. This will help us personalize your experience from the start.
              </p>
              <textarea
                rows="4"
                placeholder="What brings you to therapy today?"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Age Confirmation */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="ageCheck" className="w-5 h-5" />
              <label htmlFor="ageCheck" className="text-sm text-gray-700">
                I am over 18 years old
              </label>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#2c90e2] text-white font-bold py-3 rounded-md hover:bg-blue-600 transition"
              >
                Agree & continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
