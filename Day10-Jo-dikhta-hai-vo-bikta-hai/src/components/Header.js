import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Log in");
  const onlineStatus = useOnlineStatus();

  const toggleLogin = () => {
    setLogin((prev) => (prev === "Log in" ? "Logout" : "Log in"));
  };

  return (
    <header className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={LOGO_URL} 
                alt="Site Logo" 
                className="h-10 lg:h-12 w-auto object-contain transition-all duration-200 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <span className="text-gray-600">Status:</span>
              <span 
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                  onlineStatus 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
                aria-label={onlineStatus ? "Online" : "Offline"}
              >
                {onlineStatus ? "🟢 Live" : "🔴 Offline"}
              </span>
            </div>

            <Link
              to="/"
              className="text-base font-medium text-gray-900 hover:text-orange-600 hover:underline underline-offset-4 transition-all duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
            >
              Home
            </Link>
            <Link
              to="/offers"
              className="text-base font-medium text-gray-900 hover:text-orange-600 hover:underline underline-offset-4 transition-all duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
            >
              Offers
            </Link>
            <Link
              to="/grocery"
              className="text-base font-medium text-gray-900 hover:text-orange-600 hover:underline underline-offset-4 transition-all duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
            >
              Grocery
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-900 hover:text-orange-600 hover:underline underline-offset-4 transition-all duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium text-gray-900 hover:text-orange-600 hover:underline underline-offset-4 transition-all duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
            >
              Contact
            </Link>
          </nav>

          {/* Login Button - Swiggy/Zomato Style */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLogin}
              className="px-6 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 border border-orange-500 hover:border-orange-600"
              aria-label={`Click to ${login === 'Log in' ? 'login' : 'logout'}`}
            >
              {login}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
