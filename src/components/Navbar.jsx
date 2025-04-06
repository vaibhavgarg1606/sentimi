import user from "../assests/user.png"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="flex items-center justify-between border-b border-[#e7eef4] px-10 py-3">
            <div className="flex items-center gap-4 text-[#0d151c]">
            <div className="w-4 h-4">
                {/* add logo here */}
            </div>
            <Link to={"/"} className="text-lg font-bold leading-tight tracking-[-0.015em]">Sentimi</Link>
            </div>

            <div className="flex gap-4 items-center">
                <Link to="signup" className="h-10 px-4 rounded-xl bg-[#2094f3] text-white text-sm font-bold flex items-center justify-center">Get Started</Link>
                <Link to="login" className="h-10 px-4 rounded-xl bg-[#e7eef4] text-[#0d151c] text-sm font-bold flex items-center justify-center">Log in</Link>
                <Link to="/profile">
                    <img
                    src={user}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                    />
                </Link>
            </div>
        
        </header>
    );
}

export default Navbar;