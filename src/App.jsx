import Chatbot from "./pages/chatbot";
import Profile from "./pages/profile";
import { Routes, Route } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Home from "./pages/home";
import Login from "./pages/login";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
