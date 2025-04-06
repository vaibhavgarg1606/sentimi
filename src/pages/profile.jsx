// ProfileDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import user from "../assests/user.png";

function Profile() {
  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all hover:shadow-2xl">
          <div className="flex items-center space-x-6">
            <img
              src={user}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Vaibhav Garg</h3>
              <p className="text-gray-500">Full Stack Developer</p>
              <p className="text-sm text-gray-400 mt-1">vaibhav@example.com</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-medium mb-2">About</h4>
            <p className="text-gray-600 leading-relaxed">
              Passionate developer with experience in Python, Django, React, game development, and more.
              Loves solving problems and building cool things!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
